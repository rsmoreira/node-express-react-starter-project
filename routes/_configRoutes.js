module.exports = app => {
    require('./authRoutes')(app);
    require('./testRoutes')(app);
}