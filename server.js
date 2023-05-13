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

// Home route for testing our app:
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Index route:
app.get('/index', (req, res) => {
    res.send('Hit the index route')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))