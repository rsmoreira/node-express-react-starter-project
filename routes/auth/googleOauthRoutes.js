const passport = require('passport');

// this line below allows that app, crated into the index.js, can be used here.
module.exports = (app) => {

    // Google OAuth Passport Strategy Routes
    // Route to get authenticated with google
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email'],
            prompt: 'select_account',
            hd: 'e-core.com'

        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/authfailed' }),
        (req, res) => {
            res.redirect('/dashboard')
        }
    );

}