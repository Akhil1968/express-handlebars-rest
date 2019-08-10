
const axios = require('axios');
const URL = 'http://localhost:8080/books';

exports.getBooksHandler = function(req, res){
	axios.get(URL)
	.then(response => {
		console.log(response.data);
		res.render('listBooks.handlebars', {list: (response.data)});
	})
	.catch(error => {
		console.log(error);
		return error;
	});
}//getBooksHandler

exports.addBookFormHandler = function(req, res){
	res.render('addBook.handlebars', {});
}//addBookFormHandler

exports.postBookHandler = function(req, res){
	const bodyData = {
        book_name: req.body.bookName,
        author_name: req.body.authorName,
        isbn: req.body.isbn
	};
	const config = {
		headers: {'Content-Type': 'application/json'}
	};
	console.log("postBookHandler");
	console.log(bodyData);

	axios.post(URL, bodyData, config)
	.then(function (response) {
		console.log(response);
		axios.get(URL)
		.then(response => {
			console.log(response.data);
			res.render('listBooks.handlebars', {list: (response.data)});
		})
		.catch(error => {
			console.log(error);
			return error;
		});
		})
	.catch(function (error) {
		console.log("ERROR while posting data");
		console.log(error);
	});
}//postBookHandler
