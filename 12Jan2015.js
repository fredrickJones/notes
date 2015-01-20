// JavaScript (objects)

// -key/value pair
// -they have properties
// -two ways to create (literal, constructor)
// -functions in objects are called methods
// -dot notation and bracket notation to access values

// an array is a layer on top of an object

// var myObj = {}; -to create a new object

// objects are a collection of data rather than an order/structure of data like an Array

// var person = {
// 	name: "Fredrick",
// 	age: 31,
// 	birthday: "18 Aug",
// 	taken: true
// };

// on the left are keys
// on the right are values

// add by dot notation
// 	person.hairColor = “red”;

// person.getHairColor = function () {
	
// };

// delete with 
// 	delete person.age;

// looping over an object:
// 	for in loop


		

var person = {
	name: "Fredrick",
	age: 31,
	birthday: "18 Aug",
	taken: true
};

var tables [
	{
	occupied: false,
	people: 0,
	ordered: false,
	id: 1
	},
	{
	occupied: true,
	people: 3,
	ordered: false,
	id: 2
	},
	{
	occupied: true,
	people: 4,
	ordered: true,
	id: 3
	}
];

var countTotal = function() {
	var total = 0;
	for (var i = 0; i < tables.length; i++) {
		total += tables[i].people);
	}
	return total;
};


for(var key in person){
	alert(person[key]);	
};

person['age'];