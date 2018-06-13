# e-Core Native APP

# Technologies
    > Node
    > ExpressJS
    > MongoDB (MongooseJS)
    > PassportJS (Google Strategy - Google OAuth)
    > Cookie-session

# Clone Install the project
Checkout this repo, install dependencies, then start the gulp process with the following:

    > git clone https://github.com/rsmoreira/e-core-native-app.git
    > cd e-core-native-app
    > npm install
    > cd client 
    > npm install

# Create the dev.js file
It must to be created at '/config/keys' folder and named as 'dev.js'.

So, create, into the root path directory of the project, the folders 'config/keys' and create a file named 'dev.js' into the keys folder. It must have exactly this name, because it is already configured to not be commited and it's also being used on keys.js.

It must to be done only for Development environment.
For Production environment, you must config your Env Variables.

module.exports = {
    googleClientID : <% got at your Google Developer Account / Credentials %>,
    googleClientSecret : <% got at your Google Developer Account / Credentials %>,
    mongoURI : <% add your MongoDB URI here %>,
    cookieKey : <% add any string here %>,
    ldapUrl: <% LDAP Url string %>,
    ldapBindDN: <% LDAP Bind DN string %>,
    ldapBindCredentials: <% Ldap Bind Credentials string %>,
    ldapSearchBase: <% Ldap Search Base string %>,
    ldapSearchFilter: <% Ldap Search Filter string %>,
};

# Ldap Configuration 

    An example to configure your LDAP keys could be found at ./docs/ldap.txt. 

# Create e-core-native Database 
Create on MongoDB a Database named e-core-native. 
For this database, create an User with readWrite role. 
Then, configure the key mongoURI on dev.js with the connection URI.

# Running 
    > npm run dev