const express=require('express');

const router=express.Router();


router.use('/ques',require('./ques'));

// router.use('/ans',require('./ans'));




module.exports =router;