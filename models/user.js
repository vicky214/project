const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:{
            unique:true,
        },
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User',userSchema);