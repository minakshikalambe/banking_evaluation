const mongoose=require("mongoose");

const savingsSchema=new mongoose.Schema(
    {
        accountnumber:{type :String,required:true,unique:true},
        balance:{type :Number,required:true},
        interestRate :{type :Number,required:true},
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

const Savings=mongoose.model("saving",savingsSchema);

module.exports=Savings;