const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
// app.use(cors({
//     origin: 'https://dmitriev-dmitrii.github.io'
// }));
const mongoose = require ('./mongoose');

// https://www.npmjs.com/package/mongoose
// вызываем подключенный монго модуль  со всеми настройками

const api = require ('./api');
// в  папке api хранятся все get / post и тд запросы  от приложения node к mongo 
// там же и прописаны запросы по которым будет обращаться фронт например:  app.get('/users'....
api(app,mongoose);
// в api/index.js это функция - серия колбеков  со всеми роутами запросов , вызыевем  ее  передавая app,mongoose

module.exports = app;



