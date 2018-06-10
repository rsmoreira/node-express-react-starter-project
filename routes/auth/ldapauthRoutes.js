const passport = require('passport');
const keys = require('../../config/keys/keys');
const users = require('../../app/controllers/users.server.controller');

// this line below allows that app, crated into the index.js, can be used here.
module.exports = (app) => {

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
            passport.authenticate('ldapauth', 
                async (err, user, info) => {
                    if (err) { return next(err) }
                    
                    if (!user) {
                        return res.send({sucess:false, message: 'authentication failed'});
                    }
                    
                    // create the user into the data base!
                    var providerUserProfile = {
                        id: user.dn,
                        firstName: user.cn,
                        lastName: user.sn,
                        displayName: user.cn,
                        email: user.mail,
                        username: user.uid,
                        roles: user.objectClass,
                        ldapUid: user.uid,
                        ldapDn: user.dn,
                        ldapUidNumber: user.uidNumber,
                        ldapGidNumber: user.gidNumber,
                        ldapHomeDirectory: user.homeDirectory,
                        provider: 'ldap',
                        providerIdentifierField: 'dn',
                        providerData: user
                    }

                    users.saveOAuthUserProfile(providerUserProfile, (err, dsUser) => {
                        if (err) { return next(err) }

                        req.logIn(dsUser, err => {
                            if (err) { return next(err) }
    
                            return res.send({sucess: true, message:'authentication succeded.'})
                        }) 
                    });
                }
            )(req, res, next);
        });


}