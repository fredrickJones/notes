// schema and model are almost the same but in the mongo world they are different
// this is your database so the way you set it up is your discretion

// use embed to save the state at that time
	// items: [Product]
// use ref when you want the info to "auto update"
	// {type: Schema.Types.ObjectId, ref: 'Customer'}

// you want to ba able to index through(query) all your data as quick and efficiently as possible


// sudo code for schema
	// User schema
	var userSchema = {
		name: String,
		email: String,
		password: String, //always store passwords as encrypted data
		gender: String,
		bio: String,
		createdAt: Date,
		age: {type: Number, min: 18, max: 99}
	}

	userSchema.pre('save', function(next) {
		this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
		next();
	});


// encrypting passwords
	var bcrypt = require(“bcrypt”);
	userSchema.pre('save', function(next) {
		var user = this
		if(!user.isModified('password')) {
			return next();
		}
		bcrypt.genSalt(12, function(err, salt) {
			if(err) {
				return next(err);
			}
			bcrypt.hash(user.password, salt, function(err, hash) {
				if (err) {
					return next(err);
				}
				user.password = hash;
				next();
			});
		});
	});
	
	var q = require('q');
	userSchema.methods.comparePassword = function(pass) {
		var deferred = q.defer();
		bcrypt.compare(pass, this.password, function(err, isMatch) {
			if (err) {
				deferred.reject(err);
			} else {
				deferred.resolve(isMatch)
			}
		});
		return deferred.promise;
	};


// inside a controller
User.findOne({email: req.body.email}).exec().then(function(err, user) {
	if (user) {
		user.comparePassword(req.body.password).then(function(isMatch) {
			if (isMatch) {
				req.session.authed = true;
			} else {
				return res.redirect('/login');
			}
		});
	}
});


// more code notes
module.exports = {
	getCustomer: function(req, res) {
		// /api/cusomers/:id
		customer.findOne({_id: req.params.id}).exec().then(function(err, user) {
			return res.json(user);
		});
	},
	getCustomer: function(req, res) {
		var sort = req.query.sort || '-createdAt';
		var skip = req.query.skip || 0;
		var limit = Number(req.query.limit) || 100;
		if (limit < 1000) {
			limit = 1000;
		}
		// /api/cusomers
		Customer
			.find()
			.limit(limit) //optional
			.skip(skip) //optional
			.sort(sort) //optional
			.select('name email address') //optional
			.exec().then(function(err, users) {
				return res.json(users);
			});
	}
}


// order controller
module.exports = {
	getOrder: function(req, res) {
		// /api/orders/:id
		order.findOne({_id: req.params.id})
			.exec().populate('customer')
			.then(function(err, user) {
				console.log(order);
			return res.json(user);
		});
	}
}






