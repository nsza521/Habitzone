const mongoose = require('mongoose')
const dbUrl = 'mongodb://0.0.0.0:27017/HabitzoneDatabase'  
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))


let UserInfomation = mongoose.Schema({
    Name : String,
    Surname:String,
    Email:String,
    Hash:String,
    PhoneNumber:String,
    Address : String,
    Cartorder : Array
})

let Userinfo =  mongoose.model("users",UserInfomation ) 

module.exports = Userinfo

module.exports.saveuserinfo = function(model){
    model.save()
}
