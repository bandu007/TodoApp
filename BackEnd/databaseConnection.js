const mongoose = require('mongoose')

const dbConnection = ()=>{

    const databaseURL = process.env.MONGODB_URI

 DatabaseConnection = mongoose.connect(databaseURL)

DatabaseConnection.then(()=>{
    console.log('Database is connected')
})
DatabaseConnection.catch((error)=>{
    console.log(error,"Database is not connected")
})}

module.exports = dbConnection