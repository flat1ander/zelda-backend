// Import Mongoose:
const mongoose = require('mongoose')

// Database Configuration:
const DATABASE_URL = "mongodb+srv://thematthewlane:flatkouppa7@cluster1.smwrnhs.mongodb.net/?retryWrites=true&w=majority"

// Mongoose connect to URL:
mongoose.connect(DATABASE_URL);

mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to mongo")
})

mongoose.connection.on("error", (error) => {
    console.log("mongoDB Connection Error:", error)
})

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

// export mongoose:
module.exports = { mongoose }