const express = require("express");
const app = express();
const portti = 4010;

const session = require("express-session");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const tunnukset = require("./models/kayttajat");



app.set("views","./views");
app.set("view engine","ejs");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({"secret":"secret","resave":false,"saveUninitialized":false,"maxAge":6000}));



app.post("/login",(req,res,)=>{

    let tunnus = req.body.tunnus;
    let salasana = req.body.salasana;

    let hash= crypto.createHash("RSA-SHA256").update(salasana).digest("hex");

        tunnukset.haetyontekija(req.body.tunnus,(err,kayttaja)=>{

            if(err) throw err;
    
            
            if(kayttaja.length==0){
    
                req.session=null;
                res.render("index",{"virhe":"Virheellinen tunnus tai salasana."}); // tunnusta ei löydy tietokannasta
    
            }
    
        
                kayttaja.map((kayttis)=>{
                 
                    tunnukset.haetyot(req.body.tunnus,(err,tehtavat)=>{
                        
                        if(kayttis.tunnus==tunnus && kayttis.salasana==hash){
                        

                        
                            req.session.kayttajatiedot = kayttaja;
                        
                            res.render("kirjautunut",{"kayttaja":kayttis.tunnus,
                                                        "kayttis":kayttis.id,
                                                        "tehtavat":tehtavat})
                                                       

                                                        
                        }   else{
                            req.session=null;
                            res.render("index",{"virhe":"Virheellinen tunnus tai salasana."}); // salasana tai tunnus on väärin
    
                        }
                     })
                 
                    })
                 
    
        }) 

})

app.post("/tallenna",(req,res)=>{

tunnukset.lisaatyo(req.body,(err,data)=>{
    
    if(err) throw err;
    

    tunnukset.haetyontekija(req.body.tunnus,(err,kayttaja)=>{

        if(err) throw err;

        
            kayttaja.map((kayttis)=>{
             
                tunnukset.haetyot(req.body.tunnus,(err,tehtavat)=>{
                
                  
                    
                       if(err) throw err;
                        res.render("kirjautunut",{"kayttaja":kayttis.tunnus,
                                                    "kayttis":kayttis.id, 
                                                    "tehtavat":tehtavat})
                  
                 })
             
                })
             

    }) 


})


});





app.get("/",(req,res,)=>{
    
   
    res.render("index",{"virhe":null});

})

app.get("/logout",(req,res)=>{

        
    if (req.session) {
        req.session.destroy(function() {
            res.clearCookie('connect.sid', { path: '/' });
            res.redirect("/");
        });
    } 
      
})

app.listen(portti,()=>{

    console.log(`Palvelin käynnistyi porttiin ${portti}`);

})