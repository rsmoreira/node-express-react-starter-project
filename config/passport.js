const passport = require('passport');
const users = require('../app/controllers/users.server.controller');
const path = require('path');

module.exports = () => {
    /**
     * Configuring passport to treat the Cookie serialization and 
     * deserialization.
     * 
     * The 'user' is the retrieved/authenticated user that we
     * have work with on our GoogleStrategy callback function.
     * 
     */
    passport.serializeUser((user, done) => {
        // This user.id, is the id generated on the Users Collection, on MongoDB.
        // It isn't the profile.id.
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        users.configDeserializeUser(id, done);
    });

    require('./strategies/google')();
    require('./strategies/ldap')();
}
