const express = require('express'); 
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// DB
mongoose.connect('mongodb://localhost:27017/fruits', { useMongoClient: true })
// check our db 
mongoose.connection.once('open', () => {
	console.log('connected to mongo');
})

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

// controller
const fruitController = require('./controllers/fruitController');
app.use('/fruits/', fruitController);

app.listen(3000, () => {
	console.log('server listening on 3000');
})