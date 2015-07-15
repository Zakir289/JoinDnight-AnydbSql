/**
 * Created by zakirelahi on 14/07/15.
 */


var reg = require('./register-night')


module.exports = function(app){

    app.post('/registerdetails',reg.register)

}
