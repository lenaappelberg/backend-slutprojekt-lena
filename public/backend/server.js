import express from 'express'
import  url  from 'url'
import path from 'path'
import mongoose from 'mongoose'
import app from './app.js'
const __filename=url.fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
console.log(__dirname)
const PORT=process.env.PORT ||8080
const mongoURI=process.env.mongoURI
const dbconnect= async () => {
    try {
        const mongo=await mongoose.connect(mongoURI)
        console.log(`MongoDB connected:${mongo.connection.host}`)
    } catch (error) {
        console.log(`MongoDB Connection error: ${error.message}`)
    }
}
const startServer=async () => {
    try {
        await dbconnect()
        app.listen(PORT,()=>console.log(`server is running on http://localhost:${PORT}`))
    } catch (error) {
        console.log('Failed to start server:',err.message)
        process.exit(1)
    }
    
}
startServer()