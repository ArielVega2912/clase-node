const fs = require('fs');
const privateKey =fs.readFileSync('.keys/private.pem', 'utf8');
const jwt = require('jsonwebtoken');

const logeado = (req, res, next) =>{
    try{
        const headers = req.headers;
        console.log(headers);
        const obj = jwt.verify(headers.authorization, privateKey);
        req.id = obj.id;
        next();
        // req.headers.authorization

    }catch(e){
        console.log(e);
        res.sendStatus(401);

    }
}

module.exports = {logeado};