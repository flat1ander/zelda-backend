// Import Dependencies:
const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); 
const mongoose = require('mongoose');

// Import Monsters:
const { DATABASE_URL, PORT } = require('./config');
const monstersRouter = require('./Routers/monstersRouter');

// Create App object:
const app = express();

// Set up middleware:
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/monsters', monstersRouter)

// Home route for testing our app:
app.get('/', (req, res) => {
    res.send('Hit Default Route!')
});

// Listener
mongoose.connect(DATABASE_URL).then(() => {
    console.log('Connected to mongoDB 🥭')
    app.listen(PORT, () => {
      console.log(`🦦🌴🍟Listening on port ${PORT}`);
    });
  });
