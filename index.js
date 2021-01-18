require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose')
const ShopDesign = require('./models/designshop')
mongoose.connect(process.env.dbUri,{useNewUrlParser: true, useUnifiedTopology: true})
.then(result =>{
app.listen(process.env.PORT,()=> console.log(`http://localhost:${process.env.PORT}`))
})
.catch(err => console.log(err))
app.use(express.static('public'))
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//Routes

app.get('/add' , (req, res) =>{
ShopDesign.aggregate([{ $sample: { size: 6 } }])
    .limit(6)
    .then((result) => {
      res.render("add", { newItems: result });
      console.log(result);
    });
})
app.post('/add', (req, res) =>{
    console.log(req.body);
    // const newItems=  new ShopDesign({
    //     product_name: req.body.product_name,
    //     company : req.body.company,
    //     price : req.body.price,
    //     picture_Link : req.body.picture_Link,
    //     link_shop : req.body.link_shop,
    //     description : req.body.description,
    // })

    
    const newItems=  new ShopDesign(req.body)
    newItems.save()
    .then(result => res.redirect('/'))
    .catch(err => console.log(err))
    
})
app.get('/', (req, res) => {
    ShopDesign.find()
    .then(result => res.render('index',{newItems: result}))
    .catch(err => console.log(err))
})
app.get('/details/:id', (req, res) => {
    // console.log(req.params.id);
    ShopDesign.findById(req.params.id)
    // ShopDesign.find()
    .then(result => res.render('details',{Details: result}))
    .catch(err => console.log(err))
})