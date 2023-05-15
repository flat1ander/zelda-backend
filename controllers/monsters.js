const express = require('express');
const router = express.Router();
const Monsters = require('../models/monsters')

// Index:
router.get('/', async(req, res) => {
    const monsters = await Monsters.find({});
    
})

