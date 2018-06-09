const passport = require('passport');

// this line below allows that app, crated into the index.js, can be used here.
module.exports = (app) => {

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

};