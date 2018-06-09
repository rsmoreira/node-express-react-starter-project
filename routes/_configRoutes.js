module.exports = app => {
    require('./auth/commonAuthRoutes')(app);
    require('./auth/googleOauthRoutes')(app);
    require('./auth/ldapauthRoutes')(app);
    
}