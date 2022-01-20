const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

// const path = require( 'path' );
// app.use(express.static(path.join(__dirname, 'result-data')));

app.get('/users', function (req, res) {
	res.send('/users');
});

app.get('/users/:id', function(req , res){
	res.send(req.params.id);
});

// app.post('/img-rocessing',async function  (req, res) {
// 	if(!req.body) return response.sendStatus(400);
// 	// console.log(req.body);
// 	resultData = await 	imgProcessing( req );
// 	// console.log( resultData );

// 	// console.log( res.headers );
	
// 	res.send({resultData});
// 	res.end();
// });

module.exports = app;
