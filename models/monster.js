const { mongoose } = require('mongoose')

const monstersSchema = new mongoose.Schema({
    name: String,
    image: String,
    commonLocation: String,
    description: String,
    difficulty: String,
    tips: String,
    date: String,
    defeated: Boolean,
})

const Monster = mongoose.model('Monster', monstersSchema, 'monsters')

module.exports = {Monster};