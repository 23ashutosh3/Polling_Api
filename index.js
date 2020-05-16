const express = require ('express');
const app =express();
const port=8000;
const db = require('./config/mongoose.js');
const mongoose = require('mongoose');
app.use(express.urlencoded());

mongoose.Promise = global.Promise;

app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err)
    {
        console.log(`Error:err`);

    }else{
        console.log(`server is running:${port}`);
    }
});