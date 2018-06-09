const passport = require('passport');
const LdapStrategy = require('passport-ldapauth');
const keys = require('../keys/keys.js');
const users = require('../../app/controllers/users.server.controller');

module.exports = () => {
    
    var OPTS = {
        server: {
            url: 'ldap://ldap.forumsys.com:389',
            bindDn: 'cn=read-only-admin,dc=example,dc=com',
            bindCredentials: 'password',
            searchBase: 'dc=example,dc=com',
            searchFilter: '(uid={{username}})'
        }
    };

    passport.use(new LdapStrategy(OPTS));

}