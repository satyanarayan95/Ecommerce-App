import mongoose from "mongoose";


const Connection = async (user, password) => {
    const URL =`mongodb+srv://${user}:${password}@cluster0.a5bhy.mongodb.net/ecommerce?retryWrites=true&w=majority`;

    try{
     await mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true})
     console.log("DB connection established");
    }
    catch(err){
        console.log("error in connecting to DB ",err.message);
    }
 }

 export default Connection;