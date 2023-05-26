const express = require('express');
const { Monster } = require('../models/monster');
const router = express.Router();
const monsterData = require('../models/monsterData.json');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    res.json(await Monster.find({})).status(200);
})

router.get('/seed', async (req, res) => {
    await Monster.deleteMany({});
    await Monster.create(monsterData);
    res.redirect('/monsters')
})

router.get('/:id', async (req, res) => {
    res.json(await Monster.findById(req.params.id))
})

router.post('/', async (req, res) => {
    res.json(await Monster.create(req.body))
})

router.put('/:id', async (req, res) => {
    res.json(await Monster.findByIdAndUpdate(req.params.id, req.body, {new: true}))
})

router.delete('/:id', async (req, res) => {
    res.json(await Monster.findByIdAndRemove(req.params.id))
})

module.exports = router;