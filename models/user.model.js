import { compareSync } from "bcryptjs";
import mongoose, { Mongoose } from "mongoose";

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['student', 'recruiter']
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        resume:{type:String},
        resumeOriginalName:{type:String},
        profilePicture:{
            type:String,
            default: ''
        },
        company:{type:mongoose.Schema.Types.ObjectId , ref:'company'}
    }
}, {timestamps:true})

export const user = mongoose.model('User', userSchema);