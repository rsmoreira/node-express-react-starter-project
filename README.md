# e-Core Native APP

# Technologies
    > Node
    > ExpressJS
    > MongoDB (MongooseJS)
    > PassportJS (Google Strategy - Google OAuth)
    > Cookie-session

# Clone the project
Checkout this repo, install dependencies, then start the gulp process with the following:

    > git clone https://github.com/rsmoreira/e-core-native-app.git
    > cd e-core-native-app
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
    cookieKey : <% add any string here %> 
};

# Create e-core-native Database 
Create on MongoDB a Database named e-core-native. 
For this database, create an User with readWrite role. 
Then, configure the key mongoURI on dev.js with the connection URI.

# Running 
    > npm run dev

# Testing the Application

    After you already have done all of the configurations above, use the routes below to get authenticated on Google OAuth.

    > http://localhost:5000/auth/google

        It will execute the Google OAuth 2 flow, and you will be asked by Google to perform a login with a Google Account. After it your user will be saved on the datasource (if it weren't been done bofore) and this user will be added to the session-cookie. 

        After you have already been authenticated by Google you will receive a response like:

            "Cannot GET /auth/google/callback" - yes, it is expected.

    > http://localhost:5000/api/current_user

        If you already have been authenticated by Google (.../auth/google has already been correctly executed) you will see your user that was saved on cookie-session:

            {
                "_id":"5adfd3498aa78001436a5f1",
                "googleId":"107978123456145119668",
                "__v":0
            }

    > http://localhost:5000/api/logout

        You will be logged out and your session-cookie will be cleaned. 
        You will see a blank page as well.
        To check if you were really logged out, execute .../api/current_user and you will see a blank page.


