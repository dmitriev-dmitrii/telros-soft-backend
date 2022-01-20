module.exports =  function (app,mongoose){

	app.put('/update-user', (req, res) => {
	// console.log(req.body);
	if(!req.body) return res.sendStatus(400);
	// если запрос пустой вернем статус 400

	const filter =  req.body._id ;
	// в req.body полчаем обновленные обект
	// а находим его по собственному id 

	mongoose.model('Users').findOneAndUpdate( filter, req.body )
	.then(user => res.send(user))
	// в случае успешной записи вернем в ответе записанный обЬект , в нем должен быть уникалный id который ему присвоила бд
	.catch(err => res.send(err));

});

}