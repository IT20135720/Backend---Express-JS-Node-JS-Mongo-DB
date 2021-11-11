const mongoose=require("mongoose");
const ConnectToDB =async () =>mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
});

module.exports=ConnectToDB;
    
