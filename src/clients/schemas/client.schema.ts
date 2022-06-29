import {  Schema } from '@nestjs/mongoose';
import mongoose from "mongoose";

export const ClientSchema = new mongoose.Schema({
    name: {type:String,required:true},
    email:String,
    telephone:Number,
    country: String,
    createdAt:{
        type:Date,
        default:Date.now
    }
  });
  