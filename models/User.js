const mongoose = require('mongoose');
const { Schema } = mongoose;

// It is our Mongoose Schema for the collection User.
// It will the responsible to map all possible attributes of an User record could have.
const userSchema = new Schema({
	providerId : String,
    firstName : String,
    lastName : String,
    username : String,
    displayName : String,
    email : String,
	provider : String,
	
	ldapUid: String,
	ldapDn: String,
	ldapUidNumber: String,
	ldapGidNumber: String,
	ldapHomeDirectory: String,

    providerData: {},
	roles: {
		type: [{
			type: String
		}],
		default: ['user']
	},
	updated: {
		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	},
	/* For reset password */
	resetPasswordToken: {
		type: String
	},
	resetPasswordExpires: {
		type: Date
	}
});

// This command below will tell mongoose to create a new collection named 'users', 
// using the userSchema as the model
mongoose.model('users', userSchema); 