const Question = require("../../../models/question");
const Option=require("../../../models/option");


//add votes for specific answer
module.exports.AddVotes= async function(req,res)
{

  
try{ 
     const option=await Option.findById(req.params.id);
    //  let quesId = option.question;


    if(option)
    {
        let curVote = option.votes;
        option.votes = curVote + 1;

        await option.save();

        return res.status(200).json({
            // quesId:quesId,
            option:option,
            message: "Vote added successfully"
          });
    }

    //if option is not found
    else{
        return res.json(400,{
            message:"option is not found"
        })
    }

    }catch(err)
    {
      return res.json(500,{
          message:"internal server error"
      })
    }
    
}



module.exports.deleteOption = async function(req,res){

    try{



         // question id require to delete option from question schema 
        
        const option = await Option.findById(req.params.id);

        let quesId = option.question;
        if(option.votes >0){
            return res.json(400, {
                message:"Can't delete this option as it has votes!"
            });
        }

        option.remove();

        //delete the option schema from ques schema

        let question = await Question.findByIdAndUpdate(quesId, {$pull:{ options: req.params.id}});
 
        
        return res.json(200, {
            question:question.populate({path:'options'}),
            message:"deleted"
        });
    }
    catch(err){
        return res.json(500, {
            message:"internal server error"
        });
    }
} 