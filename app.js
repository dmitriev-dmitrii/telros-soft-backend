
import express from 'express';

const app =  express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/users', function (req, res) {
	res.send('users');
});

app.get('/users/:id', function(req , res){
	res.send(req.params.id);
});



export default  app;
