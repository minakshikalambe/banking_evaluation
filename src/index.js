const express=require("express");

const usersController=require(".controllers/user.controllers")
const branchController=require(".controllers/branch.controllers")

const app=express();

app.use("users",usersController)

app.use("branch",branchController)
const connect=require("./configs/db");

app.listen(5007,async()=>{
    try{
        await connect();
    }
    catch(err){
        console.log(err);
    }
    console.log("Listening on port 5006")
})