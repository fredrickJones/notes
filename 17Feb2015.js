// Getting started with an App

// -main folder
// --api
	// --models
	// ---userModel.js
		var mongoose = require(‘mongoose’);
		var bcrypt = require(‘bcrypt’);
		var q = require('q');

		var schema = mongoose.Schema({
			email: {type: String unique: true},
			password: String,
			gender: String,
			age: Number,
			bio: String
		});

		schema.pre(‘save’, function(next) {
			var user = this;
			if(!user.isModified(‘password)) {
				return next();
			}
			bcrypt.genSalt(12, function(err, salt) {
				if(err) {
					return next(err);
				}
				bcrypt.hash(user.password, salt, function(err, hash) {
					user.password = hash;
					return next();
				});
			});
		});

		schema.methods.comparePassword = function(pass) {
			var deferred = q.defer();
			bcrypt.compare(pass, this.password, function(err, isMatch) {
				if(err) {
					// console.log('PANIC!!!!', err);
					deferred.reject(err);
				} else {
					deferred.resolve(isMatch);
				}
			});
			return deferred.promise;
		};
		
		module.exports = mongoose.model('User', schema);

	// ---todoModel.js
		var mongoose = require(‘mongoose’);

		var schema = mongoose.Schema({
			title: String,
			completed: {type: Boolean, default: false},
			user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
		});

		module.exports = mongoose.model('Todo', schema);


	// --controllers
	// ---userControl.js
		user.
// server.js
	var express = require('express');
	var passport = require('passport');
	var LocalStrategy = require('passport-local').Strategy;

	var app = express();
	var port = 9099;
	app.use(express.static(__dirname + '/public'));

	passport.use(new LocalStrategy({  // find user and compare passwords
		usernameField: 'email',
		passwordField: 'password'
	}, function(username, password, done) {
		User.findOne({email: username}).exec().then(function(user) {
			if(!user) {
				return done(null, false, {message: 'no user with that email'});
			}
			user.comparePassword(password).then(function(isMatch) {
				if(!isMatch) {
					return done(null, false {message: 'incorrect password'});
				}
				return done(null, user);
			});
		}); 
	}));

	app.listen(port);



