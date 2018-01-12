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

// ROUTES

// NEW 
router.get('/new', (req , res) => {
	res.render('new.ejs')
})

// CREATE
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

// SHOW
router.get('/:id', (req, res) => {
	// get the fruit from db
	Fruit.findById(req.params.id, (err, fruitFound) => {

		res.render('show.ejs', {
			fruit: fruitFound
		})
	})
})

// DELETE
router.delete('/:id', (req , res) => {

	Fruit.findByIdAndRemove(req.params.id, (err, data) => {
		if(err) {
			console.log(err);
		} else {
			res.redirect('/fruits')
		}
	})	

	console.log(req.body, 'req.body', req.params);
})

// EDIT
router.get('/:id/edit', (req , res) => {
	Fruit.findById(req.params.id, (err, data) => {
		res.render('edit.ejs', {
			fruit: data
		})	
	})
})

router.put('/:id', (req , res) => {

	if(req.body.readyToEat === 'on') {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}

	Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updateData) => {
		res.redirect('/fruits/')
	})
})


module.exports = router;