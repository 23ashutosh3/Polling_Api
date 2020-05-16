const express=require('express');

const router=express.Router();


router.use('/',require('./v1'));

// router.use('/ans',require('./ans'));




module.exports =router;