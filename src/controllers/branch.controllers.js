const express=require("express");

const Branch=require("../modules/branch.controllers");

const router=express.Router();

router.get("",async(req, res)=>{
    try {
        const branch=await Branch.find.lean().exec();
        return res.status(200).send({branch:branch})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});

module.exports=router