import mongoose from "mongoose";

export async function connectDb(MONGO_URL) {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('database connected successfully');
    } catch (e) {
        console.error(e);
    }
}