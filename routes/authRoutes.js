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

    // Route to logout
    app.get('/api/logout', (req, res) => {
        req.logout();
        // res.send(req.user);
        res.redirect('/');
    })


    // Route to show current_use data
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    /* LDAP Authentication 
    
        Authentication made against ldap://ldap.forumsys.com:389. 

        To call it, just request an Http Post request over http://localhost:5000/auth/ldap
        As parameters you need inform a json as the following:
            {
                "username": "username",
                "password": "password"
            }
        Examples of usernames: "einstein", "newton", "galieleo" and "tesla".
        Password is always "password".
    */
    app.post('/auth/ldap', 
        (req, res, next) => {
            passport.authenticate('ldapauth', {session: false}, (err, user, info) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    return res.send({sucess:false, message: 'authentication failed'});
                }
                return res.send({sucess: true, message:'authentication succeded.'})
            })(req, res, next);
        }
    );

};