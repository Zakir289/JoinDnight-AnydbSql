/**
 * Created by zakirelahi on 14/07/15.
 */



//var psgDet = require('../../models/register')

var reg = {

    register: function (req, res, next) {
        var data = {
            name: req.body.name,
            purpose: req.body.purpose,
            age: req.body.age,
            sex: req.body.sex,
            intrestedIn: req.body.intrestedIn,
            aboutYou: req.body.aboutYou,
            phoneNo: req.body.phoneNo
        };
        psgDet.add(data,function(err,res){
            if(!err && res){
                console.log('successful')
            }
            else{
                console.log(err)
            }
        })
    }
}
module.exports = reg