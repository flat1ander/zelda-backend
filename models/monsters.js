const { mongoose } = require('../db/connection');

const monstersSchema = new mongoose.Schema({
    name: String,
    image: String,
    location: String,
    description: String,
    difficulty: String,
    tips: String,
    date: String
})

const Monsters = mongoose.model('Monsters', monstersSchema)

module.exports = Monsters;