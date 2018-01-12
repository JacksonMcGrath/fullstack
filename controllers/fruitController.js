const express = require('express')

const router = express.Router()

const Fruit = require('../models/fruits.js')

// index
router.get('/', (req, res) => {
	Fruit.find({}, (err, allFruits) => {
		if(err) console.log(err);

		res.render('index.ejs', {
			fruits: allFruits
		})
	})
})

// new route
router.get('/new', (req , res) => {
	res.render('new.ejs')
})

// create route
router.post('/', (req, res) => {
	// form results live in req.body
	if(req.body.readyToEat === 'on') {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}

	console.log(req.body);

	Fruit.create(req.body, (err, createdFruit) => {
		if(err) console.log(err);
	   	res.redirect('/fruits')
	})
	// res.send(req.body)
})

// show route
router.get('/:id', (req, res) => {
	// get the fruit from db
	Fruit.findById(req.params.id, (err, fruitFound) => {

		res.render('show.ejs', {
			fruit: fruitFound
		})
	})
})

module.exports = router;