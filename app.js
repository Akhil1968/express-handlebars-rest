const express = require('express');
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const routes = require('./routes/routes.js');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({defaultLayout:''}));

app.get('/', routes.getBooksHandler);
app.get('/addBookForm', routes.addBookFormHandler);
app.post('/book', routes.postBookHandler);

const port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('HTTP server is listening on port: ' + port);
});