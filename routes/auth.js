const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const sha1 = require('sha1');
const publicKey = fs.readFileSync('./keys/public.pem');
const signOptions = {expiresIn: '1h'};
const models = require('../models/auth');
const createToken = (payload) =>{
    return jwt.sign(payload, publicKey, signOptions);
}

const auth = async (req, res) =>{
    try{
        let {username, pass} = req.body;
        pass = sha1(pass);
        const [user] = await models.isLogged(username, sha1(pass));
        //consulta BDD me devuelve un RowDataPacket ([{}]) user[0].username
        if(!user) res.sendStatus(401);
        if(!user.habilitado) res.send('verifique el mail es incorrecto!!');
        if(user.habilitado){
            const token = createToken({id: user.id});
            res.status(200).json({JWT: token, info: user})
        }
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }


}

router.post('/',auth);

module.exports = router;
