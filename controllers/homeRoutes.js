const router = require('express').Router();

router.get('/', async (req, res) =>{
    console.log('hello world!');
})

module.exports= router;