module.exports =  function (app,mongoose){

	app.get('/users/:id', (req, res) => {
	mongoose.model('Users').find({_id: req.params.id})
	.then(user => res.send(user))
	 // получаем весь масив с юзерами c бд при get запросе c front ;
	.catch(err => res.send(err));

});

}