//AJAX
  //Asynchronous JavaScript and XML

$(document).ready(function() {

//get request
	$('#getUsers').on('click', function() {
  		return $.ajax({
  			method: 'GET', //GET, PUT, POST, DELETE  //this is called CRUD
  			url: 'tellsUsWhereToGo'  //called an endpoint
  			success: function(res) {
  				console.log(res.data.children);
  				$('#content').prepend(res.data.children);
  			};
  		});
  	});

//post request
  	$('#getData').on('click', function() {
  		return $.ajax({
  			method: 'POST', //GET, PUT, POST, DELETE  //this is called CRUD
  			url: 'tellsUsWhereToGo'  //called an endpoint
  			data: {userId: 44}
  			success: function(res) {
  				console.log(res.data.children);
  				$('#content').prepend(res.data.children);
  			};
  		});
  	});

});

//JSON - JavaScriptObject Notation

//CRUD
//C - Create(POST)  //creates a new object
//R - Read(GET)
//U - Update(PUT)  //updates an excisting object
//D - Destroy(DELETE)

//CORS
//C - Cross
//O - Origin
//R - Resource
//S - Sharing


//API - application program interface

//DATABASE
  //USERS
  //POSTS
  //COMMENTS

//SERVER
  //'HTTP:GITHUB.COM/API/V1/USERS'
  //'HTTP:GITHUB.COM/API/V1/POSTS'
  //'HTTP:GITHUB.COM/API/V1/COMMENTS'

//DOCUMENTATION
  //'to use my api you need an api key'
    //'To access user data hit this endpoint':
      //'HTTP:GITHUB.COM/API/V1/USERS'


//anything you do with JQuery you can do with AJAX



