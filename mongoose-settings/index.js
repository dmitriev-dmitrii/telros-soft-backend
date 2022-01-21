const mongoose = require ('mongoose');
const mongooseUrl = require('../mongoUrl');

const userObj = require('./userObj');
// там лежит обьект  настройки  класа user

const UsersSchema = new mongoose.Schema(userObj);

mongoose.model('Users', UsersSchema);
// связываем настройки user  монго , изходя из этих натроек он будет отавать ответы для users 

mongoose.connect(mongooseUrl,{useNewUrlParser:true})
.then(()=>{
	console.log('mongoose conect succes');
})
.catch((e)=> {
	console.log('mongoose error:');
	console.log(e);
})





module.exports = mongoose;