//write a function called outerFunction that returns an anonymous function which alerts "Whoo!"
var outerFunction = function() {
	return function() {
		alert('Whoo!');
	};
};

var thing = outerFunction();//this will be the function definition
thing();//invoke the function

thing.age = 24;//we can do this because functions are first class objects


//make a variable in the outer function and alert it in the inner function
var outerFunction = function() {
	var outerFnVar = 'This is the variable in the outer function!';
	return function() {
		alert(outerFnVar);
	};
};


//because inner functions can access all variables going up it is a good idea to not have too many globle variables


var makeCounter = function() {
	var counter = 0;
	return function() {
		counter = counter + 1;
		return counter
	};
};

var innerFn = makeCounter();
innerFn();


//modify the code so that the inicial counter to be the argument that is passed in
var makeCounter = function(num) {
	var counter = num;
	return function() {
		counter = counter + 1;
		return counter
	};
};

var innerFn = makeCounter(33);
innerFn();


//now just use the argument that is being passed in
var makeCounter = function(num) {
	return function() {
		num = num + 1;
		return num;
	};
};

var innerFn = makeCounter(33);
innerFn();


//closers allow us to make veriables private when only the inner function can access it
var outerFn = function() {
	var privateVar = 'Fred';
	return function() {
		return privateVar; //this can access the privateVar but can not change the value
	};
};

//make this work
var twice = multiplier(2);
twice(5); //10

var multiplier = function(outerNum) {
	return function(innerNum) {
		return outerNum * innerNum;
	};
};


//1:30 lecture

//utahjs is a great place to review and meet others in the dev community
//Higher Order Functions
/*Functions are First Class Objects
Defined: Functions that take(input) other functions as arguments or return(output) functions as their result.*/

//Variable Hoisting


//Function Declaration Hoisting
//Function Declarations are Hoisted (this is what the code looks like)
function foo(){
  function bar() {
      return 1;
  };
  return bar();
  function bar() {
      return 2;
  };
};

alert(foo());

//What the interpreter does (this is what the interpreter does)
function foo(){
  function bar() {
      return 1;
  };
  function bar() {
      return 2;
  };
  return bar();
};

alert(foo());

//Function Expression vs Function Declaration 
function fnDeclaration(){
return 'Function declaration defined a named fn variable without requiring variable assignment.';
};

var fnExpression = function(){
return 'Function expression defined a fn as part of a variable assignment.'
};

//Function Expressions are...not really Hoisted 
function foo(){
  var bar = function() {
      return 1;
  };
  return bar();
  var bar = function() {
      return 2;
  };
};
alert(foo());

//What the interpreter does 
function foo(){
  var bar = undefined; //declarations hoisted
  var bar = undefined;
  bar = function() { //initializations not
      return 1;
  };
  return bar();
  bar = function() { //this gets deleted
  	return 2; //this gets deleted
  };
};

alert(foo());


//Prototypes
//classes (inheritance) vs prototypes (object oriented programing)
  //Backpack Analogy
Array.prototype.each = function(callBack){
   for(var i = 0; i < this.length; i++){
     callBack(this[i], i, this);
   };
};

var names = ['Tyler', 'Jake', 'Mikenzi'];

names.each(function(item, indice) {
  console.log('The Item at  ' + indice + ' is ' + item);
});

//Don't store per-instance data on a prototype (usually just methods and immutable data)


//WTF is 'this'?
  //'this' is bound to one of three things
    //1. Left of the Dot at Run Time 
    var me = {};
    me.name = 'Tyler';
    me.sayName = function(){
      console.log(this.name);
    };

    me.sayName();

    //2. If a class has been instantiated using 'new', 'this' is bound to the newly created object. 
    var Person = function(name){
      this.name = name;
    };
    Person.prototype.sayName = function(){
      console.log(this.name);
    };
    var me = new Person('Tyler');

    me.sayName();

    //3. If a function is being called with .call() or .apply(), 'this' is bound to whatever context is passed in.
    var me = {};
    me.name = 'Tyler';
    Person.prototype.sayName.call(me);

    me.sayName();

  //*If 'this' is not specified, 'this' will default to the Window object.


//Maker Function vs Constructor
  //Maker Function 
var personMaker = function(name, age){
  var person = Object.create(personMaker.prototype);
  person.name = name;
  person.age = age;
  return person;
};

personMaker.prototype.sayName = function(){
  console.log(this.name);
};

var me = personMaker('Tyler', 24);
me.sayName();

  //Object.create 
  //This is what it does under the hood
Object.create = function(obj){
  var fn = function(){};
  fn.prototype = obj;
  return new fn();
};

  //Constructor 
var Person = function(name, age){
  this.name = name;
  this.age = age;
};

Person.prototype.sayName = function(){
  console.log(this.name);
};

var me = new Person('Tyler', 24);
me.sayName();


//Closures
  //Allow you to refer to variables that were defined outside of the current function.
  //a closure is just a function but its more than that. 
var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  };
  console.log(callF('435-215-1111'));
};

callFriend();

  //Functions can refer to variables defined in outer functions even after those outer functions have returned
var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  };
  return callF;
};

var fn = callFriend();
console.log(fn('435-215-1111'));

  //Closures allow us to have 'private' data 
var User = function(name, pwHash){
  var obj = this instanceof User ? this : Object.create(User.prototype);
  obj.getName = function(){
    return 'User: ' + name;
  };
  obj.checkPassword = function(password){
    return hash(password) === pwHash;
  };
};

var user1 = new User('Tyler', '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824');
var name = user1.getName();
console.log(name);
user1.checkPassword('uTahJS');

  //Module Pattern 
var Module = function(){
	'use strict'; //will make sure all values are defined and not changing the globle value (put it on the root function)
	var obj = this instanceof Module ? this : Object.create(Module.prototype);
	var privateData1 = 'Tyler';
	obj.getter = function(){
		return privateData1;
	};
	obj.setter = function(newVal){
		privateData1 = newVal;
	};
	return obj;
};

var moduleInstance = Module();
console.log(moduleInstance.getter());
moduleInstance.setter('Jake');
console.log(moduleInstance.getter());







