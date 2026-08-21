const TodoModel = require('../models')




exports.addTask = async (req,res)=>{
    const{ID,Task, Completed} = req.body ;
    if(!Task || !ID || Completed == undefined){
       return res.status(400).json({
            success:false,
            message:"Please enter all the necessary fields"
        })
    }
    
    const Todo = await TodoModel.create(req.body)
    res.status(201).json({
        message:"The Todo Task is successfully created"
    })
   
  
}

exports.modifyTask = async(req,res)=>{
    const {id} = req.params
    
    if(req.body == undefined){
        return res.status(400).json({message:"Please enter the datum information in the request body"})
    }
    
    
    const updatedTodo =  await TodoModel.findOneAndUpdate({ID:Number(id)},req.body,{new:true})
    res.status(201).json({
        message:"The Todo Task is successfully updated",
        updatedTodo
    })

}

exports.deleteTask = async(req,res)=>{
    const {id} = req.params
   Todo =  await TodoModel.findOne({ID:Number(id)})
   if(!Todo){
    return res.status(404).json({message:"The task is not found"})
   }
   await TodoModel.findOneAndDelete({ID:Number(id)})
   res.status(200).json({message:"The task is deleted successfully",Todo})

}

exports.toggleTaskStatus = async(req,res)=>{
    const{id} = req.params
    const Todo =  await TodoModel.findOne({ID:Number(id)})
    if(!Todo){
        return res.status(404).json({message:"The task is not found"})
    }
    Todo.Completed = !Todo.Completed

    

    await Todo.save()
    

    res.status(200).json({
        message:"Task is successfully Toggled",
        Todo

    
    })

    
}
exports.getAllTasks = async(req,res)=>{
   Tasks = await TodoModel.find()
   if (!Tasks){
    return res.status(404).json({message:"No tasks found"})
   }
   res.json(Tasks)

}

exports.getTaskById = async(req,res)=>{
    const {id} = req.params
    const Todo = await TodoModel.findById(id)
    if(!Todo){
        return res.status(404).json({message:"The task is not found"})
    }
    res.send(Todo)
}