const crypto = require("crypto");

let hash = crypto.createHash("SHA256").update("1234").digest("hex");

console.log(hash);