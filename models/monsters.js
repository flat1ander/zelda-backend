const {mongoose} = require('../db/connection');

const monstersSchema = new mongoose.Schema({
    name: String,
    image: String,
    location: String,
    description: String,
})

const Monsters = mongoose.model('Monsters', monstersSchema)

module.exports = Monsters;