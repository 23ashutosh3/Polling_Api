const Question = require("../../../models/question");
const Option=require("../../../models/option");
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

module.exports.AddOption= async function(req,res)
{
    try{
        const question = await Question.findById(req.params.id);
        if(question)
        {
            let newOpt=await Option.create({
                question:req.params.id,
                text:req.body.text,
                // votes:0

            })

            newOpt.link_to_vote=`http://localhost:8000/options/${newOpt._id}/add_vote `
            newOpt.save();
            question.options.push(newOpt);
            question.save();

            return res.json(200,{
                data:
                {
                    question:question,
                    option:newOpt
                },
                message:"Option Created",
                
            });
        }
        else{
            return res.json(400,{
                message:"question not found"
            })
        }
    }catch(err)
    {
        return res.json(500,{
            message:"Internal Server Error"
        });
    }
 

   
};

module.exports.deleteQuestion =async function (req,res)
{
    try
    {
        const question=await  Question.findById(req.params.id).populate({path:"options"});
        if(!question)
        {
            return res.json(400,{
                message:"question not found"
            });
        }

        if(question.options.votes>0)
        {
            return res.json(400,{
                message:"it have a vote ,can't be deleted"
            })
        }
//delete the option first
        await Option.deleteMany({
            question:req.params.id
        });

        question.remove();

        return res.json(200,{
            message:"Quetin deleted"
        })

    }
    catch(err)
    {
            res.json(500,{
                message:"internal error"
            })
    }
}

module.exports.getques =async function(req,res)
{
    try{
        let question = await Question.findById(req.params.id)
                                    .populate(
                                        {
                                            path:'options'
                                        }
                                    );
            if(!question)
            {
                return reas.json(400,
                    {
                        message:"ques not found"
                    })
            }

            return res.json(200,{
                question
            })
    }
    catch(err)
    {
        return res.json(500, { 
            mesaage:"internal server error"
        })
    }
}