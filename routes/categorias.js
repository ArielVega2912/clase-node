const express = require('express');
const router = express.Router();
const models = require('./../models/categorias');
const {validateCreate,validateModify} = require('../middlewares/categorias');

const get = (req, res) =>{
    models.getAll().then((response) => res.json(response)).catch((err) => res.status(500).json(err))
}

const getSingle = (req, res) => {
    models.single(req.params.id).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}

const create = (req, res) => {
    models.create(req.body).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}

const modify = (req, res) => {
    models.modify(req.params.id, req.body).then((response) => res.json(response)).catch((err) => res.status(500).json(err));
}


router.get('/all', get);
router.get('/single/:id', getSingle);
router.post('/new',validateCreate, create);
router.put('/modify/:id',validateModify, modify);
module.exports = router;