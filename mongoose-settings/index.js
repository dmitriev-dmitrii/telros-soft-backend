const mongoose = require ('mongoose');
const mongooseUrl = require('../mongoUrl');

const adminSchema = require('./adminSchema');
const AdminsSchema = new mongoose.Schema(adminSchema);
mongoose.model('Admin', AdminsSchema);

const userSchema = require('./userSchema');
// там лежит обьект  настройки  класа user
const UsersSchema = new mongoose.Schema(userSchema);
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