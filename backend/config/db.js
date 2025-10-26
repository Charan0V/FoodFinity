import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
        .connect(
            "mongodb+srv://charan:charan123@cluster0.auqyict.mongodb.net/food-del"
        )
        .then(() => console.log("DB Connected"));
};

