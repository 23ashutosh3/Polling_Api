const Question = require("../../../models/question");
const Option=require("../../../models/option")
module.exports.createQues =async function(req,res)
{
    try{
        if(!req.body.ques)
        {
        return res.json(400,{
            message:"ques can not empty"
        });
        }

        const question= await Question.findOne({ques: req.body.ques})

        //if question are already present
        if(question)
        {
            return res.json(200,{question:question});
        }

        const newquestion=await Question.create({
            ques:req.body.ques,
        });

        return res.json(200,
            {
                message:"question created",
                question:newquestion,
              
            });

    }
    catch(err)
       {
           return res.json(500,
            {
                message:"internal error"
            });
       }


}

// module.exports.AddOption= async function(req,res)
// {
//     try{
//         const question = await Question.findById(req.params.id);
//         if(question)
//         {
//             let newOpt=await Option.create({
//                 ques:req.params.id,
//                 text:req.body.text,
//                 link_to_vote="http://"+req.headers.host+'/options'+ '/'+ newOpt._id + "/add_vote"

//             })
//         }
//     }
 

   
}