const express=require('express');

const router=express.Router();
const OptionController=require('../../../controllers/api/v1/option');

router.get('/:id/add_vote',OptionController.AddVotes)

router.get('/:id/delete',OptionController.deleteOption);

module.exports =router;


