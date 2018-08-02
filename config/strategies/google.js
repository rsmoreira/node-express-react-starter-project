const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../keys/keys.js');
const users = require('../../app/controllers/users.server.controller');

module.exports = () => {
    
    passport.use(
        new GoogleStrategy(
            {
                clientID: keys.googleClientID,
                clientSecret: keys.googleClientSecret,
                callbackURL: '/auth/google/callback',
                proxy: true
            },
            (accessToken, refreshToken, profile, done) => {
                /**
                 * This is the callback function called after 
                 * Google have validated with the user through 
                 * OAuth.
                 */
                
                // if (!profile._json.domain || profile._json.domain != "your-specific-domain.com") {
                //     return done(null, false);
                // }
                
                var providerData = profile._json;
                providerData.accessToken = accessToken;
                providerData.refreshToken = refreshToken;
    
                var providerUserProfile = {
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    displayName: profile.displayName,
                    email: profile.emails[0].value,
                    username: profile.username,
                    id: providerData.id,
                    provider: 'google',
                    providerIdentifierField: 'id',
                    providerData: providerData
                }
    
                users.saveOAuthUserProfile(providerUserProfile, done);
            }
        )
    );
}