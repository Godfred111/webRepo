const express = require('express')
const blogs =require('./blogs')
const app =express();
const morgan = require('morgan')
const Blog =require('./models/blog')
console.log(__dirname)

const bodyParser = require('body-parser');


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000


const dbURI="mongodb+srv://Godfred:CEgwyaTwTDOcsG1o@cluster0.xuvshkx.mongodb.net/blogDB?retryWrites=true&w=majority"
const mongoose = require('mongoose')
mongoose.connect(dbURI)
   .then((result)=>{
    console.log("connected to db")
    app.listen(port, ()=>{
        console.log('running on port 7000')
    })
    
   }).catch((err)=>console.log(err))



app.set('view engine','ejs')


//static middlewares
app.use(express.static('public'))



//sandbox-route
/*app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title:'my time 2',
        snippet:"about my life",
        body:"you can read about me"
    });
    blog.save()
      .then((result)=>{
          res.send(result)
      }).catch((err)=>console.log(err))
})

//note when inserting you have to make an instance

app.get('/find-blog',(req,res)=>{
    Blog.find({__id:1},{})
       .then((result)=>res.send(result))
       .catch((err)=>console.log(err))
       
}) */





app.get('/',(req,res)=>{
    //res.send('<h1>Now using express</h1>')
    Blog.find({},{}).sort()
    .then((result)=>{
        res.render('index',{title:"Man Goddeys sit",blogs:result  })
    }).catch((err)=>console.log(err))
})


app.get('/about',(req,res)=>{
    res.render('about',{title:"About"})
})

app.get('/about-us',(req,res)=>{
    res.render('about')
})


app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:"Create Blog"})
})


app.get('/blogs/:id',(req,res)=>{
   const id = req.params.id;
   console.log(id)
    Blog.findById(id)
    .then((result)=>res.render('details',{title:'Blog Details',blog:result})
    )
    .catch((err)=>console.log(err))
})

app.get('/blogs/delete/:id',(req,res)=>{
    const id  = req.params.id
    console.log(id)
    Blog.findByIdAndDelete(id)
    .then((result)=>res.redirect('/'))
    .catch((err)=>console.log(err))
})

app.post('/blogs/create',(req,res )=>{
   const blog = new Blog(req.body)
   blog.save()
   .then((result)=>res.redirect('/'))
   .catch((err)=>console.log(err))
    
}) 



app.use((req,res)=>{
    res.status(404).render('404',{title:"Page Not Found"})
})



