const passport = require('passport');
const LdapStrategy = require('passport-ldapauth');
const keys = require('../keys/keys.js');
const users = require('../../app/controllers/users.server.controller');

module.exports = () => {
    
    var OPTS = {
       server: {
            url:keys.ldapUrl,
            bindDn:keys.ldapBindDN,
            bindCredentials:keys.ldapBindCredentials,
            searchBase:keys.ldapSearchBase,
            searchFilter:keys.ldapSearchFilter
        }
    };

    passport.use(new LdapStrategy(OPTS));

}