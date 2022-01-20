
module.exports =  function (app,mongoose){
	//просто передаем  app,mongoose в функции для удобства написания модуля 

	require ('./users')(app,mongoose);
	require ('./create-user')(app,mongoose);
	require ('./delete-user')(app,mongoose);
	
	//каждое название модуля соответвует url к которорому будет отбращаться front 
	// например app/users 

};

