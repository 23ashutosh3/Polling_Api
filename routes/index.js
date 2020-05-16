const express=require('express');

const router=express.Router();


router.use('/',require("./api"));

// router.use('/ans',require('./ans'));




module.exports =router;