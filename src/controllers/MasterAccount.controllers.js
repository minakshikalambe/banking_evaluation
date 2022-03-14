const express=require("express");

const Master=require("../modules/MasterAccount.controllers");

const router=express.Router();

router.get("",async(req, res)=>{
    try {
        const master=await Master.find.lean().exec();
        return res.status(200).send({master:master})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});

module.exports=router