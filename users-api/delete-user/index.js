module.exports =  function (app,mongoose){

	app.post('/delete-user', (req, res) => {

	if(!req.body) return res.sendStatus(400);
	// если запрос пустой вернем статус 400
	if(!req.session.adminName) return res.send({
		message:'need auth',
		logined:false
	})
	// если не залогинен  

	//  находим его по собственному id 
	console.log(req.body);
	mongoose.model('Users').findByIdAndRemove( req.body )
	.then(user => res.send(user))

	.catch(err => res.send(err));

});

}