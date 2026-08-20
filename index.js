// import express 
const express = require ('express');
const app = express();
const TodoRouter = require ('./Routes/Todo-routes')

const dbConnection = require('./databaseConnection')





app.use(express.json());

app.use('/Todolist',TodoRouter)



PORT = 8000; 

app.listen(PORT,()=>{
    console.log('Server is up')
})