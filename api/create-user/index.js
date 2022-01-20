module.exports =  function (app,mongoose){

	app.post('/create-user', (req, res) => {
		
	// console.log(req.body);
	if(!req.body) return res.sendStatus(400);
	// если запрос пустой вернем статус 400

	// это для тестов, создам пару юзеров
	// app.get('/create-user', (req, res) => {
	// const test = {
	// 	name:'maya',
	// 	sureName: 'mmmmm',
	// 	email: 'abc@mail.com'
	// }
	// mongoose.model('Users').create(test)

	mongoose.model('Users').create(req.body)
	.then(user => res.send(user))
	// в случае успешной записи вернем в ответе записанный обЬект , в нем должен быть уникалный id который ему присвоила бд
	.catch(err => res.send(err));

});

}

