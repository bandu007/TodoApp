const express = require('express')

Router = express.Router()


const { addTask, modifyTask, toggleTaskStatus , deleteTask , getAllTasks ,getTaskById } = require('../controllers/Todo-controller')



// adding task

Router.post('/' ,addTask)

// modifying task 

Router.put('/:id', modifyTask)


// deleting a task

Router.delete('/:id',deleteTask)




// Toggle Task Status

Router.patch('/:id',toggleTaskStatus)


// get all tasks 

Router.get('/',getAllTasks)

// get a single task

Router.get('/:id',getTaskById)

module.exports = Router