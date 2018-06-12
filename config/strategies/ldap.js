const passport = require('passport');
const LdapStrategy = require('passport-ldapauth');
const keys = require('../keys/keys.js');
const users = require('../../app/controllers/users.server.controller');

module.exports = () => {
    
    var OPTS = {

        /*
            LDAP Config example
            To test:
                POST >> http://localhost:5000/auth/ldap
                body - json
                { "username":"tesla", "password": "password")
        */
        // server: {
        //     url: 'ldap://ldap.forumsys.com:389',
        //     bindDn: 'cn=read-only-admin,dc=example,dc=com',
        //     bindCredentials: 'password',
        //     searchBase: 'dc=example,dc=com',
        //     searchFilter: '(uid={{username}})'
        // }
        
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