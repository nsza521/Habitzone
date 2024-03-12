const express = require('express')
const router = require('./routes/myrouter')
const path = require('path')
const app = express()
const helmet = require('helmet')
const session = require('express-session')
const cookieparser = require('cookie-parser')


app.set('views',path.join(__dirname,'views')) //อ้างอิงส่วนview ผ่าน path
app.set('view engine','ejs') //ตั้งค่าให้viewใช้ ejs template

app.use(helmet())
app.use(express.urlencoded({extended:false})) //ทำงานร่วมกับ post method (ระบุก่อนrouter)
app.use(cookieparser()) 
app.use(session({
   secret:'Habitzone',
   resave:false,
   saveUninitialized:false
}))

app.use(router)

app.use(express.static(path.join(__dirname,'/template'))) //use template as public (static file)

app.listen(3000,()=>{
    console.log('open server in port 3000')
})