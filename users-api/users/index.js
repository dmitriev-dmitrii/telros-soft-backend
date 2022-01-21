module.exports =  function (app,mongoose){

	app.get('/users', (req, res) => {

	console.log(req.session);
	console.log(!req.session.adminName);
	if(!req.session.adminName) return res.sendStatus(401)
	// если запрос admin не залогинен вернем 401

	mongoose.model('Users').find()
	// эту функцию  мы забиндили в файле : 'mongoose/index.js' она возращает промис с масивом users;
	.then(users => res.send(users))
	 // получаем весь масив с юзерами c бд при get запросе c front ;
	.catch(err => res.send(err));

});

}