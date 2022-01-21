
// кончено же это файл стоит добавлять на git ignore , так как это тестовое задания я осталю

const user = 'dmitriev-dmitrii'
const pasword = '2XFODctsosmDLeHR'
const db = 'telros-soft'

module.exports = `mongodb+srv://${user}:${pasword}@cluster0.qm5vs.mongodb.net/${db}?retryWrites=true&w=majority`;