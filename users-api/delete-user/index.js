module.exports =  function (app,mongoose){

	app.post('/delete-user', (req, res) => {

	if(!req.body) return res.sendStatus(400);
	// если запрос пустой вернем статус 400
	if(!req.session.adminName) return res.sendStatus(401)
	// если не залогинен  401

	const filter =  req.body._id ;
	// а находим его по собственному id 

	mongoose.model('Users').findOneAndRemove( filter, req.body)
	.then(user => res.send(user))

	.catch(err => res.send(err));

});

}