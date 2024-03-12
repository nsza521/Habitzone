const mongoose = require('mongoose')
const dbUrl = 'mongodb://0.0.0.0:27017/HabitzoneDatabase'  
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))


let Discount = mongoose.Schema({
    code: String,
    type:String ,
    amount:Number
})

let Discountinfo =  mongoose.model("discounts",Discount) 

module.exports = Discountinfo
