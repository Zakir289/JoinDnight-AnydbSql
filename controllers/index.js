/**
 * Created by zakirelahi on 14/07/15.
 */


module.exports = function(app) {
 app.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });
    require('./registration')(app)
};