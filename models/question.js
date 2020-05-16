const mongoose=require('mongoose');

const quesSchema=new mongoose.Schema({
    ques:
    {
    type:String,
    require:true
    },
    options:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Option'
    }]
},{
    timestamps:true
});

const  Question=mongoose.model('Question',quesSchema);
module.exports =Question;