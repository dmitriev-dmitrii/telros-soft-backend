import app from '../app.js';

import bodyParser from  'body-parser';
app.use(bodyParser.json());

import morgan  from  'morgan';
app.use(morgan('dev'));

import cors  from  'cors';
app.use(cors());

const port =  9090 ;

app.listen(port, () => {
	console.log('server started on ' + port);
});