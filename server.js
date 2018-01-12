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

// models 
const Fruit = require('./models/fruits.js')

// new route
app.get('/fruits/new', (req , res) => {
	res.render('new.ejs');
})

// create route
app.post('/fruits', (req, res) => {
	// form results live in req.body
	if(req.body.readyToEat === 'on') {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}

	console.log(req.body);

	Fruit.create(req.body, (err, createdFruit) => {
		if(err) console.log(err);
	   	res.send(createdFruit)
	})
	// res.send(req.body)
})


app.listen(3000, () => {
	console.log('server listening on 3000');
})