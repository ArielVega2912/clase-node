const express = require('express');
const router = express.Router();
const sha1 = require('sha1');
const models = require('../models/personas');
const {validateCreate, validateModify} = require('../middlewares/personas');


const get = (req,res) => {
    models.getAll().then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}

const single = (req, res) => {
    models.single(req.params.id).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}

const create = (req, res) => {
    req.body.pass = sha1(req.body.pass);
    models.create(req.body).then((response) => res.json(response)).catch((err) => res.status(500).json(err))
}

const modify = (req, res) => {
    if(req.body.pass){
        req.body.pass = sha1(req.body.pass);
    }
    models.modify(req.params.id, req.body).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}

router.get('/all', get);
router.get('/single/:id', single);
router.post('/new',validateCreate, create);
router.put('/modify/:id',validateModify, modify);

module.exports = router;