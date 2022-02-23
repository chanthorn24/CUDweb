const router = require("express").Router();

router.get('/',(req,res)=>{
  res.render('./match/match');
});
router.get('/test',(req,res)=>{
  res.render('test1');
})


module.exports = router;
