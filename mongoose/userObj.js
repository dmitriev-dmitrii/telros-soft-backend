
// просто описываем все поля которые нужны для нашего отдельного user

module.exports = {
	name: {
		type: String,
		required: true,
	},
	sureName: {
		type: String,
		required: true,
	},
	patronymic: {
		type: String,
		default:'',
		required: false,
	},
	bornDate: {
		type: Date,
		default:null,
		required: false,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		default:null,
		required: false,
	},
	img: {
		
		required: false,
	},
}





