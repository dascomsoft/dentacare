const express = require('express');

const app = express() ;

const hbs = require('express-handlebars');

const path = require('path');

// Configure le répertoire des vues
app.set('views', path.join(__dirname, 'views'));


app.engine('handlebars' , hbs.engine({defaultLayout:'main'}))


app.set('view engine' , 'handlebars');

// Serve les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));



//Home router

app.get('/', (req,res)=>{
    res.render('home' , {title:'Home page' , style:'home.css'})
})


//About router

app.get('/about', (req,res)=>{
    res.render('about', {title:'About page', style:'about.css'})
})


//Services router

app.get('/services', (req,res)=>{
    res.render('services', {title:'Sercices page' , style:'service.css'})
    
})  



//Services router

app.get('/doctors', (req,res)=>{
    res.render('doctors', {title:'Sercices page' , style:'doctors.css'})
    
})  



//Blog router

app.get('/blog', (req,res)=>{
    res.render('blog', {title:'Blog page' , style:'blog.css'})
})


//contact router

app.get('/contact', (req,res)=>{
    res.render('contact', {title:'Contact page' , style:'contact.css'})
})


//appoitment router

app.get('/appoitment', (req,res)=>{
    res.render('appoitment', {title:'Appoitment page' ,  style:'appoitment.css'})
})



//login router

app.get('/login', (req,res)=>{
    res.render('login', {title:'login page' ,  style:'login.css'})
})




//Router blog1
app.get('/blog1', (req,res)=>{
    res.render('blog1', {title:'Blogging page' , style:'blog1.css'})
})



//Router blog2
app.get('/blog2', (req,res)=>{
    res.render('blog2', {title:'Blogging page' , style:'blog1.css'})
})



//Router blog3
app.get('/blog3', (req,res)=>{
    res.render('blog3', {title:'Blogging page' , style:'blog1.css'})
})


//Router blog4
app.get('/blog4', (req,res)=>{
    res.render('blog4', {title:'Blogging page' , style:'blog1.css'})
})



//Router blog5
app.get('/blog5', (req,res)=>{
    res.render('blog5', {title:'Blogging page' , style:'blog1.css'})
})


//Router blog6
app.get('/blog6', (req,res)=>{
    res.render('blog6', {title:'Blogging page' , style:'blog1.css'})
})


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


