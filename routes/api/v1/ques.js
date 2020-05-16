const express=require('express');

const router=express.Router();
const quesController=require('../../../controllers/api/v1/ques');


//  router.get('/',quesController.home);

router.post('/create',quesController.createQues);
router.post('/:id/options/create',quesController.AddOption);


 router.delete('/:id/delete',quesController.deleteQuestion);

 

router.get('/:id', quesController.getques);

module.exports =router;


