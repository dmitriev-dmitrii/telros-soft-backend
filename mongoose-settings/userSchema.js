
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
		type:String,
		default:null,
		required: false,
	},

	// imgName: {
	// 	contentType: String,
	// 	required: false,
	// },
	// imgDesc: {
	// 	contentType: String,
	// 	required: false,
	// },
	// img: {
	// 	data: Buffer,
	// 	contentType: String,
	// 	required: false,
	// },

}





