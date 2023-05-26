const { mongoose } = require('mongoose')

const monstersSchema = new mongoose.Schema({
    name: String,
    image: String,
    common_locations: {
        type: [String],
        default: [],
      },
    description: String,
    difficulty: String,
    tips: String,
    defeated: Boolean,
})

const Monster = mongoose.model('Monster', monstersSchema, 'monsters')

module.exports = {Monster};