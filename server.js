const express = require('express'); 
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverride = require('method-Override')

// DB
mongoose.connect('mongodb://localhost:27017/fruits', { useMongoClient: true })
// check our db 
mongoose.connection.once('open', () => {
	console.log('connected to mongo');
})

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

// CONTROLLER
const fruitController = require('./controllers/fruitController');
app.use('/fruits/', fruitController);

// Localhost listener
app.listen(3000, () => {
	console.log('server listening on 3000');
})