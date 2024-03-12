const express = require('express')
const path = require('path')
const router = express.Router()
const Userinfo = require('../models/userinfo')
const Productinfo = require('../models/product')
const Discountinfo = require('../models/discount')
const bcrypt = require('bcrypt')

router.get('/home',(req,res)=>{
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login 
            const product    = [
                {name:'คอร์สยอดนิยม',
                course1:{namec1:'course1',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course2:{namec2:'course2',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course3:{namec3:'course3',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course4:{namec4:'course4',description:'คอร์สเรียน',hr:50,price:25,path:'',divid:'math'}},
        
                {name:'คณิตศาสตร์',
                course1:{namec1:'course1',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course2:{namec2:'course2',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course3:{namec3:'course3',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course4:{namec4:'course4',description:'คอร์สเรียน',hr:50,price:25,path:'',divid:'physic'}},
        
                {name:'ฟิสิกส์',
                course1:{namec1:'course1',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course2:{namec2:'course2',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course3:{namec3:'course3',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course4:{namec4:'course4',description:'คอร์สเรียน',hr:50,price:25,path:'',divid:'chemistry'}},
        
                {name:'เคมี',
                course1:{namec1:'course1',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course2:{namec2:'course2',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course3:{namec3:'course3',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course4:{namec4:'course4',description:'คอร์สเรียน',hr:50,price:25,path:'',divid:'tgat'}},
        
                {name:'TGAT',
                course1:{namec1:'course1',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course2:{namec2:'course2',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course3:{namec3:'course3',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course4:{namec4:'course4',description:'คอร์สเรียน',hr:50,price:25,path:'',divid:'tpat'}},
        
                {name:'TPAT',
                course1:{namec1:'course1',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course2:{namec2:'course2',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course3:{namec3:'course3',description:'คอร์สเรียน',hr:50,price:25,path:''},
                course4:{namec4:'course4',description:'คอร์สเรียน',hr:50,price:25,path:'',divid:'5'}},
            ]
            res.render('Main.ejs',{pdm:product,login:login,userinfo:userinfo})
        })
    }
    else{
        const login = false
        const product    = [
            {name:'คอร์สยอดนิยม',
            course1:{namec1:'course1',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course2:{namec2:'course2',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course3:{namec3:'course3',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course4:{namec4:'course4',description:'คอร์สเรียน',hr:50,price:25,link:'/',divid:'math'}},
    
            {name:'คณิตศาสตร์',
            course1:{namec1:'course1',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course2:{namec2:'course2',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course3:{namec3:'course3',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course4:{namec4:'course4',description:'คอร์สเรียน',hr:50,price:25,link:'/',divid:'physic'}},
    
            {name:'ฟิสิกส์',
            course1:{namec1:'course1',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course2:{namec2:'course2',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course3:{namec3:'course3',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course4:{namec4:'course4',description:'คอร์สเรียน',hr:50,price:25,link:'/',divid:'chemistry'}},
    
            {name:'เคมี',
            course1:{namec1:'course1',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course2:{namec2:'course2',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course3:{namec3:'course3',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course4:{namec4:'course4',description:'คอร์สเรียน',hr:50,price:25,link:'/',divid:'tgat'}},
    
            {name:'TGAT',
            course1:{namec1:'course1',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course2:{namec2:'course2',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course3:{namec3:'course3',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course4:{namec4:'course4',description:'คอร์สเรียน',hr:50,price:25,link:'/',divid:'tpat'}},
    
            {name:'TPAT',
            course1:{namec1:'course1',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course2:{namec2:'course2',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course3:{namec3:'course3',description:'คอร์สเรียน',hr:50,price:25,link:'/'},
            course4:{namec4:'course4',description:'คอร์สเรียน',hr:50,price:25,link:'/',divid:'5'}},
        ]
        res.render('Main.ejs',{pdm:product,login:login})
    }
})

//register
router.get('/register',(req,res)=>{
    res.render('Register')
})
router.post('/getuserdata',(req,res)=>{
    const email = req.body.email
    Userinfo.findOne({Email:email}).then((doc)=>{
        if(doc == null){
            const password = req.body.password
            bcrypt.hash(password,13,(err,hash)=>{
                let newuserinfo = new Userinfo({
                    Name : req.body.name,
                    Surname: req.body.surname,
                    Email: req.body.email,
                    Hash: hash,
                    PhoneNumber: req.body.phone,
                    Address :  req.body.address,
                    Cartorder : []
                })
                Userinfo.saveuserinfo(newuserinfo)
                res.redirect('/all-course/page/1')
                //creat session plz
            })
        }
        else{
            res.redirect('/home')
        }
    })
    
})
//login
router.post('/getlogininfo',(req,res)=>{
    const username = req.body.usernamelogin 
    const passwordinput = req.body.passwordlogin

    Userinfo.findOne({Email:username}).then((doc)=>{
        if(doc === null){
            res.redirect('/home')
        }
        else{
            const usernamedataBased = doc.Email
            const userHashdataBased = doc.Hash
            bcrypt.compare(passwordinput,userHashdataBased,(err,hash)=>{
                if(username === usernamedataBased && hash){
                    req.session.username = username
                    req.session.login = true
                    req.session.cookie.maxAge =	86400000*7
                    res.redirect('/home')
                }
                else{
                    res.redirect('/all-course/page/1')
                }
            })
           
        }
}).catch((err)=>{console.log(err)})})
router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        res.redirect('/home')
    })
})


//nav menu
router.get('/classroom',(req,res)=>{
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login 
            res.render('classroom',{login:login,userinfo:userinfo})
        })
    }
    else{
        res.redirect('/home')
    }
    
})
router.get('/confirm-payment',(req,res)=>{
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login 
            
            let codestatus = false
            res.render('Confirmpayment.ejs',{login:login,userinfo:userinfo,codestatus})
          
        })
    }
    else{
        res.redirect('/home')
    }
})
router.post('/getdiscountcode',(req,res)=>{
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login 
            
            let codestatus = true
            Discountinfo.findOne({code:req.body.discount}).then((doc)=>{
                if(false){
                    // "ไม่มีโค้ด"
                }
                else{
                    let discountdoc = [doc.code,doc.type,doc.amount]
                    res.render('Confirmpayment.ejs',{login:login,userinfo:userinfo,codestatus,discountdoc})
                }
                
            })
        })
    }
    else{
        res.redirect('/home')
    }
   
})
router.get('/about-us',(req,res)=>{
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login 
            res.render('Aboutus.ejs',{login:login,userinfo:userinfo})
        })
    }
    else{
        const login = false
        res.render('Aboutus.ejs',{login:login})
    }
})
router.get('/course-status',(req,res)=>{
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login 
            res.render('Course-status.ejs',{login:login,userinfo:userinfo})
        })
    }
    else{
        res.redirect('/home')
    }
})
router.get('/quiz-docs',(req,res)=>{
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login 
            res.render('Docs.ejs',{login:login,userinfo:userinfo})
        })
    }
    else{
        const login = false
        res.render('Docs.ejs',{login:login})
    }
})

//other
router.get('/other/:other',(req,res)=>{
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login 
            const other = req.params.other

            if(other === 'how-to-confirm-payment'){
                res.render('Howtoconfirmpayment.ejs',{login:login,userinfo:userinfo})
            }
            else if(other === 'privacy-policy'){
                res.render('Privacy-Policy.ejs',{login:login,userinfo:userinfo})
            }
            else if(other === 'terms-and-conditions-of-use'){
                res.render('Condition.ejs',{login:login,userinfo:userinfo})
            }
            else if(other === 'contact-us'){
                res.render('Contactus.ejs',{login:login,userinfo:userinfo})
            }
            else if(other === 'how-to-register-shop'){
                res.render('Howtoreg.ejs',{login:login,userinfo:userinfo})
            }
            else{
                res.send('error')
            }
        })
    }
    else{
        const login = false
        const other = req.params.other
        if(other === 'how-to-confirm-payment'){
            res.render('Howtoconfirmpayment.ejs',{login:login})
        }
        else if(other === 'privacy-policy'){
            res.render('Privacy-Policy.ejs',{login:login})
        }
        else if(other === 'terms-and-conditions-of-use'){
            res.render('Condition.ejs',{login:login})
        }
        else if(other === 'contact-us'){
            res.render('Contactus.ejs',{login:login})
        }
        else if(other === 'how-to-register-shop'){
            res.render('Howtoreg.ejs',{login:login})
        }
        else{
            res.send('error')
        }
    }
    
})

//course all
router.get('/all-course/page/:id',(req,res)=>{
    const path = "all-course"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find().then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find().then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
//category
router.get('/course-for-dek67/page/:id',(req,res)=>{
    const path = "course-for-dek67"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find({category:"m6"}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({category:"m6"}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
router.get('/course-for-m5/page/:id',(req,res)=>{
    const path = "course-for-m5"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find({category:"m5"}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({category:"m5"}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
router.get('/course-for-m4/page/:id',(req,res)=>{
    const path = "course-for-m4"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find({category:"m4"}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({category:"m4"}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
router.get('/course-for-m123/page/:id',(req,res)=>{
    const path = "course-for-m123"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find({category:"m123"}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({category:"m123"}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
//subject
router.get('/subject-math/page/:id',(req,res)=>{
    const path = "subject-math"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find({subject:"math"}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({subject:"math"}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
router.get('/subject-physic/page/:id',(req,res)=>{
    const path = "subject-physic"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find({subject:"physic"}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({subject:"physic"}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
router.get('/subject-chemistry/page/:id',(req,res)=>{
    const path = "subject-chemistry"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find({subject:"chemistry"}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({subject:"chemistry"}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
//type
router.get('/type-tgat_tpat/page/:id',(req,res)=>{
    const path = "type-tgat_tpat"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login
            
            Productinfo.find({type:{$in:["tgat_tpat"]}}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({type:{$in:["tgat_tpat"]}}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
router.get('/type-alevel/page/:id',(req,res)=>{
    const path = "type-alevel"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find({type:{$in:["alevel"]}}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({type:{$in:["alevel"]}}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
router.get('/type-mathMS/page/:id',(req,res)=>{
    const path = "type-mathMS"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find({type:{$in:["mathMS"]}}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({type:{$in:["mathMS"]}}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
router.get('/type-mathHS/page/:id',(req,res)=>{
    const path = "type-mathHS"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find({type:{$in:["mathHS"]}}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({type:{$in:["mathHS"]}}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
router.get('/type-chemistryHS/page/:id',(req,res)=>{
    const path = "type-chemistryHS"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find({type:{$in:["chemistryHS"]}}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({type:{$in:["chemistryHS"]}}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
router.get('/type-physicHS/page/:id',(req,res)=>{
    const path = "type-physicHS"
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login

            Productinfo.find({type:{$in:["physicHS"]}}).then((doc=>{
                const datalenght = doc.length
                let page = 0
                let perpage = 18
                if(req.cookies.add == undefined){
                    const addproduct = false
                    
                    for(let lenght = 0;lenght<datalenght;lenght++){ 
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
                else if (req.cookies.add){
                    res.clearCookie('add')
                    const addproduct = true
                    for(let lenght = 0;lenght<datalenght;lenght++){ //1-8
                        if(lenght%perpage == 0){ 
                            page++              
                            if(page == req.params.id){
                                res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login,userinfo:userinfo,addproduct:addproduct})
                            }
                        } 
                    }
                }
            }))
        })
    }
    else{
        const login = false
        Productinfo.find({type:{$in:["physicHS"]}}).then((doc=>{
            const datalenght = doc.length
            let perpage = 18
            let page = 0
            for(let lenght = 0;lenght<datalenght;lenght++){ 
                if(lenght%perpage == 0){ 
                    page++              
                    if(page == req.params.id){
                        res.render('All-course.ejs',{path:path,pageindex:doc,product:doc.slice(lenght,page*perpage),login:login})
                    }
                } 
            }
            
        }))
    }
})
//get each porduct when click
router.get('/product/:id',(req,res)=>{
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username}).then((doc)=>{
            let name = doc.Name
            let surname = doc.Surname
            let email = doc.Email
            let order = doc.Cartorder 
            let isEmpty = Object.values(doc.Cartorder).every(x => x === null || x === '');
            const userinfo = [name,surname,email,order,isEmpty] 
            const login = req.session.login
            res.render('Coursetemplate.ejs',{login:login,userinfo:userinfo})
        })
    }
    else{
        const login = false
        res.render('Coursetemplate.ejs',{login:login})
    }

})
//add product to userDB
router.get('/addproduct/:id',(req,res)=>{
    if(req.session.login){
        Userinfo.findOne({Email:req.session.username,Cartorder:{$elemMatch:{courseid:req.params.id}}}).then((doc)=>{
            if(doc == null){
                Productinfo.findOne({courseid:req.params.id}).then((doc)=>{
                    let updatedata = {$push:{Cartorder:{$each:[{name:doc.name,teacher:doc.teacher,price:doc.price,courseid:doc.courseid}]}}}
                    Userinfo.findOneAndUpdate({Email:req.session.username},updatedata).then(()=>{
                        res.cookie('add',true,{maxAge:10000})
                        res.redirect('/all-course/page/1')
                    })
                })
            }
            else{
                res.write('this product cannot add anymore')
            }
        })
    }
    else{
        res.write('login first stupid')
    }
})
//delete order userDB
router.get('/delete/:id',(req,res)=>{
    if(req.session.login){
        let deletedata = { $pull: { Cartorder: { courseid: req.params.id } } }
        Userinfo.findOneAndUpdate({Email:req.session.username},deletedata).then(()=>{
            res.redirect('/all-course/page/1')
        })
    }
    else{
        res.write('login first stupid')
    }
})
router.get('/delete2/:id',(req,res)=>{
    if(req.session.login){
        let deletedata = { $pull: { Cartorder: { courseid: req.params.id } } }
        Userinfo.findOneAndUpdate({Email:req.session.username},deletedata).then(()=>{
            res.redirect('/confirm-payment')
        })
    }
    else{
        res.write('login first stupid')
    }
})
//backend system
router.get('/Content-Management-System',(req,res)=>{
    res.render('cmstemplate/Cms')
})

module.exports = router