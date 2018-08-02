# Node Express React Starter Project

# Technologies
    > Node
    
    Back End
    > ExpressJS
    > MongoDB (MongooseJS)
    > PassportJS 
        > Google Strategy - Google OAuth 2.0 - Option to validate business domain e-mail 
        > LDAP Strategy - Authentication on ldap://ldap.forumsys.com:389 server
    > Express-Session with Connect-Mongo as Session Store

    Front End
    > React
    > React-Redux
    > Redux-Form
    > Materialize CSS

# Clone Install the project
Checkout this repo, install dependencies, then start the gulp process with the following:

    > git clone https://github.com/rsmoreira/node-express-react-starter-project.git
    > cd node-express-react-starter-project
    > npm install
    > cd client 
    > npm install

# Create the dev.js file
It must to be created at '/config/keys' folder and named as 'dev.js'.It must have exactly this name, because it is already configured to not be commited and it's also being used on keys.js.

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

# Create your MongoDB Database 
Create on MongoDB a Database named as you wish. 
For this database, create an User with readWrite role. 
Then, configure the key mongoURI on dev.js with the connection URI.

# Running 
    > npm run dev

# Documentation at /docs folder