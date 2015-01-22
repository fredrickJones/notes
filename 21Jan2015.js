//HTTP: Hypertext Transfer Protocol
  //request made to
    //URL
  //requests and responses both have
    //headers
    //body
    //cookies

//JSON
  //JavaScript Object Notation
  //JSON can write to JS but Js cann't write to JSON
  //things listed in JSON
    //string
    //boolean
    //object
    //

//AJAX
  //Asynchronous Javascript and XML

//ReST (or REST)
  //Representation State Transfer
  //API aplication programming interface
  //
  //Most used Methods
    //Create - post
    //Read - get
    //Update - put
    //Destroy - delete

//promises are versital
  //$q
  //

//$http
  //




//Establish the rules of the problem
  //are there any specific rules?
  //this way you know what the end goal is and then you can go forward
//Explore the problem space
  //write down everything you know about the problem
//TDD: Test Driven Development
  //
//Specify a plan that should solve the problem and elaborate the plan into steps
  //
//Translate each line into a line of code

var names = ['fred', 'tyler', 'ryan', 'colt', 'tyler', 'blaine', 'fred'];
uniq(names, function(uniqArr) {
  console.log('the new names array with all the duplicate items removed is ', uniqArr);
});
//Debuging
  //Rules?
    //the first parameter is an array
    //the array will contain strings
    //the second parameter is a function
  //Explore the problem space
    //loop through all names
    //object as a lookup table
    //dont need to return anything
    //invoke the second parameter
    //n^2 vs constant
  //TDD
    //the code we are given
  //Steps
    //create a function called uniq which takes in an array and a callback function
    //create an empty object
    //create a new array
    //loop over my array for the length of my array
      //look to see if the individual item in the array (name), is a key/value pair in my object. If it isn't, push the name to my new array and add it as a property/value on my object. If it is, ignore it
    //invoke the callback function passing it the new array
  //Code it
var uniq = function(arr, callback) {
  //debugger;
  var obj = {};
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if(!obj[arr[i]] {
      newArr.push(arr[i]);
      obj[]
    }
  };
  callback(newArr);
};




