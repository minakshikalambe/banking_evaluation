const mongoose=require("mongoose");

const branchSchema=new mongoose.Schema(
    {
        name:{type :String,required:true},
        address:{type :String,required:true},
        address:{type :String,required:true},
        MICR:{type :Number,required:true},
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Branch=mongoose.model("user",branchSchema);

module.exports=Branch;