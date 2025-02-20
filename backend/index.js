import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './routes/bookRoute.js'
import userRoute from './routes/userRoute.js'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 3009
const MONGO_URI = process.env.MONGO_URI

//connect to mongo

try{
    mongoose.connect(MONGO_URI)
    console.log("Database connected successfully")
}catch(error){
      console.log("Error in connecting database", error)
}

//defining routes

app.use("/book" , bookRoute)
app.use("/user", userRoute)

app.listen(PORT, ()=>{
    console.log(`Example app listening on port ${PORT} `)
})