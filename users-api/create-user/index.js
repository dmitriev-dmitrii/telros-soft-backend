module.exports =  function (app,mongoose){

	app.post('/create-user', (req, res) => {
		
	// console.log(req.body);
	if(!req.body) return res.sendStatus(400);
	// если запрос пустой вернем статус 400
	
	if(!req.session.adminName) return res.sendStatus(401)
	// если не залогинен  401

	mongoose.model('Users').create(req.body)
	.then(user => res.send(user))
	// в случае успешной записи вернем в ответе записанный обЬект , в нем должен быть уникалный id который ему присвоила бд
	.catch(err => res.send(err));

});

}

