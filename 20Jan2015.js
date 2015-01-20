//SERVICES
  $http //
  $watch //monitors what you tell it to
  $log  //wraps your console.log
  
  //keep your controler lite /only 
  //what services can do for you (even custom ones)
    //services are singletons obstantiated once and
    //helps with modularity(take the parts of your app that are common and pass a module(perameters) into them)
    //testability ()
  //four usefull methods for services
    //value
      //
    //factory
      //
    //service

//HTML
<html ng-app="PupsApp">
  <head>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
    <script src="node_modules/angular/angular.js"></script>
    <script src="app.js"></script>
    <link rel="stylesheet" href="style.css">
  </head>
  <body ng-controller="MainController">
    <div class="container">
      <h1>Kittehs!</h1>
      <img ng-src="{{hero}}" alt="">
    </div>
  </body>
</html>


//ANGULAR JS
var app = angular.module('PupsApp', []);

app.config(function (animalProvider) {
  animalProvider.setAnimal('bear')
})

app.value('apiBase', 'http://placekitten.com/')

app.factory('kittenFactory', function(apiBase) {  //factory is a custom service
  return {                                        //
    getKitten: function (w, h) {
      console.log('Running kitten factory');
      return apiBase + '/' + w + '/' + h;
    }
  }
})

app.service('kittenService', function (apiBase) {  //uses the 'new' keyword like a constructor function (can now use the 'this' keyword)
  this.getKitten = function (w, h) {
    console.log('Running kitten service');
    return apiBase + '/' + w + '/' + h;
  }
})

app.service('animalator', function() {
	var baseUrl = 'http://place'
	this.getAnimal = function(animal, w, h) {
		return baseUrl + animal + '.com/g/' + w + '/' + h;
	}
});

app.provider('animal', function () {  //
  var animal = 'kitten'
  this.setAnimal = function (newAnimal) {
    animal = newAnimal
  }

  function Animaller() {
    this.getAnimal = function (w, h) {
      console.log('Running animal provider');
      return 'http://www.place' + animal + '.com/' + w + '/' + h;
    }
  }

  this.$get = function () {
    return new Animaller()
  }
})

var controller = app.controller('MainController', function (
    $scope, apiBase, kittenFactory, kittenService, animal) {
  		$scope.hero = 'http://placekitten.com/800/500'
  		$scope.hero = apiBase + '/800/500'
  		$scope.hero = kittenFactory.getKitten(800, 500)
  		$scope.hero = kittenService.getKitten(800, 500)
  		$scope.hero = animal.getAnimal(800, 500)
})


//CSS
* {
  font-family: 'Open Sans', Helvetica;
  font-weight: 400;
  box-sizing: border-box;
}
h1,h2,h3,h4 {
  font-weight: 300;
}
img {
  border: 1em solid #1abc9c;
  border-radius: .2em;
  max-width: 100%;
}
.container {
  font-size: 1.5em;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}