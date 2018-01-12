const express = require('express');
const app = express();


app.get('/fruits/new', (req , res) => {
	res.render('new.ejs');
})


app.listen(3000, () => {
	console.log('server listening on 3000');
})