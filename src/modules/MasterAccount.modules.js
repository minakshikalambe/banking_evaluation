const mongoose=require("mongoose");

const masterSchema=new mongoose.Schema(
    {
        balance:{type :Number,required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },
        branchId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"branch",
            required:true,
        }
       
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Master=mongoose.model("master",userSchema);

module.exports=User;