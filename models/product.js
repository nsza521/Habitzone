const mongoose = require('mongoose')
const dbUrl = 'mongodb://0.0.0.0:27017/HabitzoneDatabase'  
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))


let Product = mongoose.Schema({
    name: String,
    teacher:String ,
    price:Number ,
    hr: Number,
    courseid:String ,
    path:String,
    category:String,
    subject:String,
    type:Array
})

let Productinfo =  mongoose.model("products",Product) 

module.exports = Productinfo
