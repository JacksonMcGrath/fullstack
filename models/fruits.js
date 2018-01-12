const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
	name: {type: String, required: true},
	color: {type: String, required: true},
	readyToEat: Boolean
})

// create model -- follow capitalization carefully

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;