const mongoose=require("mongoose");

const fixedSchema=new mongoose.Schema(
    {
        accountnumber:{type :String,required:true,unique:true},
        balance:{type :Number,required:true},
        interestRate :{type :Number,required:true},
        startDate:{type :Number,required:true},
        maturityDate:{type :Number,required:true},
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

const Fixed=mongoose.model("fixed",fixedSchema);

module.exports=Fixed;