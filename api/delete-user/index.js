module.exports =  function (app,mongoose){

	app.post('/delete-user', (req, res) => {

	if(!req.body) return res.sendStatus(400);
	// если запрос пустой вернем статус 400

	mongoose.model('Users').findOneAndRemove(req.body)
	.then(user => res.send(user))

	// в случае успешной записи вернем в ответе записанный обЬект , в нем должен быть уникалный id который ему присвоила бд
	.catch(err => res.send(err));

});

}