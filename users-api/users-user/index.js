module.exports =  function (app,mongoose){

	app.get('/users/:id', (req, res) => {

	// console.log(req.params.id);
	if(!req.session.adminName) return res.sendStatus(401)
	// если не залогинен  401
	
	mongoose.model('Users').findById({_id: req.params.id})

	.then(user => res.send(user))
	.catch(err => res.send(err));

});

}