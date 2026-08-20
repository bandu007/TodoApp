const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({

    Task:{
        type:String,
        required:true
    },
    Completed:{
        type:Boolean,
        required:true,
        default:false
    }
},{timestamps:true})

module.exports = mongoose.model('Todo-Tasks',TodoSchema)