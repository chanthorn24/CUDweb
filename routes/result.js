const router = require("express").Router();

router.get('/',(req,res)=>{
  res.render('./result/result');
});



module.exports = router;
