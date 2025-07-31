// database/db.js
import mongoose from "mongoose"; // <-- ADD THIS LINE

export const connectDB = async () => {
    try {
        const MONGO_URL = process.env.MONGO_URL;

        if (!MONGO_URL) {
            console.error("MongoDB connection string (MONGO_URL) is not defined in environment variables.");
            process.exit(1);
        }

        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
