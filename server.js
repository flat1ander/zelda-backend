// Import Dependencies:
const express = require('express');
const cors = require('cors');
const PORT = 3000

// Import Monsters Schema:
const Monsters = require('./models/monsters')

// Create App object:
const app = express();

// Set up middleware:
app.use(cors());
app.use(morgan("tiny")) 

// Home route for testing our app:
app.get('/', (req, res) => {
    res.send('Hit Default Route!')
})

const monstersController = require('./controllers/monsters')
app.use('/monsters', monstersController) 


// Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))