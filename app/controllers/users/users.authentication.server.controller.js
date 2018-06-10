const mongoose = require('mongoose');

const User = mongoose.model('users');


exports.configDeserializeUser = async (id, done) => {
    let user = await User.findById(id);
    done(null, user);
}

/**
 * saveOAuthUserProfile
 * 
 * Method used to persist the User into the database, if it
 * hasn't been done before. 
 * 
 * DONE - 
 *  It is the Passport's callback function used to tell Passport 
 *  that our callback was finished successfully. It will be called 
 *  after the User has been retrieved or created on the Database. 
 */
exports.saveOAuthUserProfile = async (providerUserProfile, done) => {
    
    let user = await User.findOne({ providerId : providerUserProfile.id });

    if (user) {
        return done(null, user);
    }
    
    let providerUserName;

    if (providerUserProfile.provider === 'google') {
        providerUserName = providerUserProfile.username || ((providerUserProfile.email) ?  
                                    providerUserProfile.email.split('@')[0] : '');
    } else {
        prividerUserName = providerUserProfile.username;
    }

    user = await new User({ 
                providerId : providerUserProfile.id,

                firstName: providerUserProfile.firstName,
                lastName: providerUserProfile.lastName,
                username: providerUserName,
                displayName: providerUserProfile.displayName,
                email: providerUserProfile.email,
                ldapUid: providerUserProfile.ldapUid,
                ldapDn: providerUserProfile.ldapDn,
                ldapUidNumber: providerUserProfile.ldapUidNumber,
                ldapGidNumber: providerUserProfile.ldapGidNumber,
                ldapHomeDirectory: providerUserProfile.ldapHomeDirectory,
                provider: providerUserProfile.provider,
                providerData: providerUserProfile.providerData 
            
            }).save();

    done(null, user);

}