const express = require('express');
const { Monster } = require('../models/monster');
const router = express.Router();
const monsters = require('../models/monsterData.json');


// Index route at /monsters
router.get('/', async (req, res) => {
    res.json(await Monster.find({})).status(200);
})

// Seed Route:
router.get('/seed', async (req, res) => {
    await Monster.deleteMany({});
    await Monster.create(monsters);
    res.redirect('/monsters')
})

// Show Route:
router.get('/:id', async (req, res) => {
    res.json(await monsters.findById(req.params.id))
})

// Post Route:
router.post ('/', async (req, res) => {
    res.json(await monsters.create(req.body))
})

// Put Route:
router.put('/:id', async (req, res) => {
    res.json(await Monster.findByIdAndUpdate(req.params.id, req.body, {new: true}))
})

// Delete Route:
router.delete('/:id', async (req, res) => {
    res.json(await Monster.findByIdAndRemove(req.params.id))
})

module.exports = router;