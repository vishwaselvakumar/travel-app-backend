const mongoose = require('mongoose');

const hotelSchema= new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String, required:true},
    images:{type:[String], required:true},
},{  timestamps:true});

module.export = mongoose.model('Hotel',hotelSchema)