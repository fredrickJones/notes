// PASSPORT
// verifiying who the person says they are

// Auth happens between HTTP and SERVER
	// set up so certain GET request only happen when loged-in and others from static html page

// HTTP Auth (basic)
	// http://username:password@domain/
	// NOT SECURE AT ALL
	// server can not save
	// not commonly used anymore

// FORM BASED Auth (usually using cookies)
	// using for tag in html
	// cookies always get sent with every server request
	// uses HTTPS POST
	// on the server using express and body-parser
		app.use(bodyParser.urlencoded({extended: false}));
	// also include express-session
		app.use(sesion({
			secret: 'any arrangment of letters and numbers'
		}));

// OAuth is a way to authenticate trough third party logins (eg: facebook, twitter, google)
	// a very common way to auth
	// token based auth
	// usually see this when using API's
	// node module called passport
		// app.twitter.com
			// to use localhost change to http://127.0.0.1:8080/
			// look at keys and tokens
			// import another module passport-twitter
				var TwitterStrategy = require('passport-twitter').Strategy;
				passport.use(new TwitterStrategy({
					consumerKey: 'key from twitter',
					consumerSecret: 'secret from twitter',
					callbackURL: 'must be an absolute url with http'
				}, function(token, tokenSecret, profile, done) {
					// create/update/lookup db record
				}));
				app.use(passport.inialize());
				app.use(passport.session());
				passport.serializeUser(function(user, done) {
					done(null, user);
				});
				passport.deserializeUser(function(obj, done) {
					done(null, obj);
				});
			// define the endpoint
				app.get('/auth/twitter', passport.authenticate('twitter'));
				app.get('/auth/twitter/callback', passport.authenticate('twitter', {
					successRedirect: '/',
					failureRedirect: '/login.html'
				}));
			// middlewear 
				var isAuthed = function(req, res, next) {
					if(!req.isAuthenticated()) {
						return res.redirect('/login.html');
					}
					next();
				};

				app.get('/', isAuthed, function(req, res) {
					return res.sendFile(__dirname + '/public/home.html');
				});



				
