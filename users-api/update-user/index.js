module.exports =  function (app,mongoose){

	app.put('/update-user', (req, res) => {

	if(!req.body) return res.sendStatus(400);
	// если запрос пустой вернем статус 400
	if(!req.session.adminName) return res.send({
		message:'need auth',
		logined:false
	})

	const filter =  req.body._id ;
	// в req.body полчаем обновленные обект
	// а находим его по собственному id 

	const options = {
		new : true
	}
	mongoose.model('Users').findByIdAndUpdate( filter, req.body,options )
	.then(user => res.send(user))
	// в случае успешной записи вернем в ответе записанный обЬект , в нем должен быть уникалный id который ему присвоила бд
	.catch(err => res.send(err));

});

}

