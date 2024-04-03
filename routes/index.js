var express = require('express');
var router = express.Router();




const All_books = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/library',(req, res)=>{
  res.render('library', {books:All_books})
})

router.get('/create',(req, res)=>{
  res.render('create')
})


router.post('/create',(req, res)=>{
  All_books.push(req.body)
  console.log(All_books)
  res.redirect("library")
  // res.render('create')
})



router.get('/delete/:index',(req, res)=>{
  All_books.splice(req.params.index,1)
  res.redirect('/library')
})



router.get('/about',(req, res)=>{
  res.render("aboutUs")
})



module.exports = router;
