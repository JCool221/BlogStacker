const router = require('express').Router();

router.get('/', async (req, res) =>{
    console.log('hello world!');
    res.render('homepage');
})

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
});
  
module.exports= router;