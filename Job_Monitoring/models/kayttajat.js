const mysql = require("mysql");



const yhteys = mysql.createConnection({
                                        "host":"localhost",
                                        "user":"root",
                                        "password":"",
                                        "database":"soveltavaharjoitus"
                                        });

yhteys.connect((err)=>{

    if(!err){
        console.log("Tietokantayhteys avattu!");
    }   else{
        throw `Virhe-${err}`  ;
    }

})

module.exports={


    "haetyontekija":(tunnus,callback)=>{

        let sql = "SELECT * FROM tunnukset WHERE tunnus = ?";

        
        yhteys.query(sql,[tunnus],(err,data)=>{

            callback(err,data);
            
        })
        

    },

    "haetyot":(tunnus,callback)=>{

        let sql = "SELECT * FROM tyot LEFT JOIN tunnukset ON tyot.tyontekijaid = tunnukset.id WHERE tunnukset.tunnus = ?";

        let tiedot = [[tunnus]];
        yhteys.query(sql,[tiedot],(err,data)=>{

            callback(err,data);
            
            
        })

       
    },

    "lisaatyo":(tiedot,callback)=>{

     

        let sql = "INSERT INTO tyot (tyontekijaid,tyotehtavat,tunnit,pvm) VALUES ?"
        let uusi = [[tiedot.tyontekijaid,tiedot.tyotehtavat,tiedot.tunnit,tiedot.pvm]];
        
        yhteys.query(sql,[uusi],(err,data)=>{

            callback(err,tiedot);

            

         });

    },
    "haekaikkityot":(callback) =>{

        let sql = "SELECT * FROM tunnukset,tyot";
        yhteys.query(sql,(err,data)=>{

            callback(err,data);

            

         });


    }

}