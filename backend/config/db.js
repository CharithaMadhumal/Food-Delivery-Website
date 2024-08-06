import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://charithamadhumal174:20000205@fooddelivery.jwpsarh.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}