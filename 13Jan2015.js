var sayName = function(enteredName) {
  alert('Hello, ' + enteredName);
};
sayName();

var sayHello = function() {
	alert('Hello!');
};

var myOtherFn = function(callback) {
	
};


var getFirst = function(arr, callback) {
  var firstItem = arr[0];
  callback(firstItem);
};

var friends = ['Fred', 'Ben', 'Mike'];
var cb = function(firstItem) {
	alert('The first item is ' + firstItem);
};

getFirst(friends, cb);

//a call back is when a function is passed to another function and invoked at a later time

var getSongs = function(callback) {
	alert('About to get songs');
	setTimeout(function() {
		alert('After 3 Seconds');
	}, 3000);
	callback;
};

var alertSongs = function() {
	alert('The songs are {{SONGS}}');
};

getSongs(alertSongs);



var alertThing = function(thing) {
	alert(thing);
};

var last = function(arr, callback) {
	callback(arr[arr.length - 1]);
};

last([1, 2, 3], alertThing);



var sayHi = function(sentence, callback) {
	callback(sentence + ' you are the best');
};

sayHi('Hi Katie', function(thingToSay){
	alert(thingToSay);
});



//1:30 lecture

var person = function(name, age) {
	var odj = {};
	obj.name = name;
	obj.age = age;
	obj.sayName = function() {
		alert(this.name);
	}
	return obj;
};

var fred = person('Fred', 31);
var jason = person('jason', 27);

//above is a Maker Pattern
//below is a Constructor Pattern
//constructors: a function that returns an object
//every function has a "backpack" or property that is called a prototype

var Person = function(name, age) {
	//var this = {};
	this.name = name;
	this.age = age;
	//return this
};

Person.prototype.sayName = function() {
	alert(this.name);
};

//to specify that we are using the constructor
var fred = new Person('Fred', 31);

Person.prototype.sayName = function() {
	alert("My name is " + this.name)
};

fred.sayName();

//practice
var friends = ['brandon', 'mike', 'ben', 'dallen'];

Array.prototype.first = function() {
	return this[0];
};

//more practice
var Car = function(color, make, model) {
	this.color = color;
	this.make = make;
	this.model = model;
};

Car.prototype.drive = function() {
	alert('driving');
};
Car.prototype.stop = function() {
	alert('stopping');
};

var car1 = new Car('Red', 'Ford', 'Fiesta');
var car2 = new Car('Blue', 'Tesla', 'Model S');

//what does the NEW keyword do in javaScript
  //1. creates an Object called THIS
  //2. uses Object.create to create an object, which delegates to the constructors prototype
  //3. returns the THIS object

//What are the benefits of using a constructor function vs just create a function that returns an object?
  //Constructor creates you objects that can delegate to their constructors.
  //Add a method after initially creating the instance.

  //more practice
var Boat = function(color, price) {
	this.color = color;
  	this.price = price;
  };

Boat.prototype.drive = function() {
	alert('driving');
};
Boat.prototype.stop = function() {
	alert('stopping');
};

var firstBoat = new Boat('fusia', 12039434);
var secondBoat = new Boat('terqouis', 83282302);

  //the THIS keyword, refers to whatever is to the left of the dot at call time.

