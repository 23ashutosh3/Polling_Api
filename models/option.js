const mongoose=require('mongoose');

const optionSchema=new mongoose.Schema({
    text:
    {
    type:String,
    require:true
    },

    
    question:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Option',
      required:true
  },

    votes:
    {
      type:Number,
      default:0
    },

    link_to_vote:
    {
      type:String
    }

},{
  timestamps:true
});

const  Option=mongoose.model('Option',optionSchema);
module.exports =Option;