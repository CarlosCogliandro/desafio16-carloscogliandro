import mongoose from "mongoose";

const collection = 'Users';

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: 'user'
    }
})

const userModel = mongoose.model(collection, userSchema);

export default userModel;