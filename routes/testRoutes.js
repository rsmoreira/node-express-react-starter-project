const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

    app.get('/test/login', requireLogin, function (req, res) {
        return res.send('You are logged in!');
    });
    
    app.get('/foo', function (req, res, next) {
        res.send('Test Views - you viewed this page ' + req.session.views['/foo'] + ' times')
    })
    
    app.get('/bar', function (req, res, next) {
        res.send('Test Views - you viewed this page ' + req.session.views['/bar'] + ' times')
    })

    app.get('/api/current_session', (req, res) => {
        res.send(req.session);
    });

    app.post('/test/authldap', (req, res) => {
        console.log(req.body.username);
        console.log(req.body.password);

        res.send('ok')
        
        
    });

};