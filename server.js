const express = require('express');
const app = express();


// middleware

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));

// new route
app.get('/fruits/new', (req , res) => {
	res.render('new.ejs');
})

// create route
app.post('/fruits', (req , res) => {
	// form results live in req.body
	if(req.body.readyToEat === 'on') {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}

	res.send(req.body)
})


app.listen(3000, () => {
	console.log('server listening on 3000');
})