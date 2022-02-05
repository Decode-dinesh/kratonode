const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    postId:{
        type:Number,
    },
    id:{
        type:Number,
    },
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    body:{
        type:String,
    }

})

module.exports = mongoose.model('user', userSchema);