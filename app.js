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

app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}));

const mongoose = require ('./mongoose-settings');

const adminApi = require('./admin-api');
adminApi(app,mongoose);

// https://www.npmjs.com/package/mongoose
// вызываем подключенный монго модуль  со всеми настройками

const usersApi = require ('./users-api');
// в  папке api хранятся все get / post и тд запросы  от приложения node к mongo 
// там же и прописаны запросы по которым будет обращаться фронт например:  app.get('/users'....
usersApi(app,mongoose);
// в users-api/index.js это функция - серия колбеков  со всеми роутами запросов , вызыевем  ее  передавая app,mongoose




module.exports = app;



