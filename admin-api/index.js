
const crypto = require('crypto')
const Admin = require('./adminSchema')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const mongooseUrl = require('../mongoUrl');

module.exports =  function (app,mongoose){

	// здесь всего 2 метода поэтому не стал разбивать по модулям

	app.use(session({
		secret: 'telrosSecret',
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 1 // 1 день
		},
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({ mongoUrl: mongooseUrl })
	}))
	
	app.post('/admin-login', function(req, res) {

		mongoose.model('Admin').findOne({name: req.body.name}) 

		.then(admin => {

			// console.log(hash(req.body.password));
			// console.log(admin.password);
			// res.send( hash(req.body.password) === admin.password );

			if ( hash(req.body.password) === admin.password) {

				req.session.adminName=admin.name;
				// console.log(req.session);
				res.send({
					name:admin.name,
					message:'succes logined',
					logined:true
				}); 

			}
			else {
				res.send({	
					message:'wrong password',
					logined:false
				});
			}
		}
		)
		.catch(err => res.send({	
			message:'wrong name',
			err:err,
			logined:false
		}));

	});

	app.get('/admin-login-test/', (req, res) => {

		!req.session.adminName ?  
			res.send({
			message:'need auth',
			logined:false
		}) : 
			res.send({
			name:req.session.adminName,
			message:'logined',
			logined:true
		}) ;

		});

// сюда будет приходить запрос при каждом маунте приложения и получать ответ 

	app.post('/admin-logout', function(req, res) {
		if (req.session.adminName) {
			delete req.session.adminName;
		}
		res.send({	
			message:'logout succes',
			logined:false
		})
	});
	
	

};


function hash(text) {
	return crypto.createHash('sha1')
	.update(text).digest('base64')
}

