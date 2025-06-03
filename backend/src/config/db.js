
//EYjNb07ZSfqh6XEo

//mongodb+srv://kpvishnu10987:EYjNb07ZSfqh6XEo@cluster0.vyhjr7r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import mongoose from 'mongoose';

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.error("ERROR CONNECTING TO MONGODB:",error);
        process.exit(1);       
    }
}