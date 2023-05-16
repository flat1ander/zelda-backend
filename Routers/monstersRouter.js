const express = require('express');
const { Monster } = require('../models/monster');
const router = express.Router();
const monsters = require('../models/monsterData.json');



router.get('/', (req, res) => {
    res.json(monsters);
})


module.exports = router;