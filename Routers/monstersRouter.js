const express = require('express');
const { Monster } = require('../models/monster');
const router = express.Router();
const monsters = require('../models/monsterData.json');


// Index route at /books
router.get('/', (req, res) => {
    res.json(monsters);
})

// Seed Route:
router.get('/seed', async (req, res) => {
    await Monster.deleteMany({});
    await Monster.create(monsters);
    res.redirect('/monsters')
})

// Show Route:
router.get('/:id', async (req, res) => {
    res.json(await Monster.findById(req.params.id))
})

// Post Route:
router.post ('/', async (req, res) => {
    res.json(await Monster.create(req.body))
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