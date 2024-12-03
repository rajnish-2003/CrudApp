//const mongoose=require("mongoose");
import mongoose from 'mongoose'


const Connection=async()=>{

    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/crud")
        console.log("database connected succesfully")
    }catch(error){
        console.log("database connection failed",error)
    }
    
    
}

export default Connection;
