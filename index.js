process.on('uncaughtException', (err)=>{
    console.log('error',err)
})
import express from 'express'
import dotenv from "dotenv"
import { initApp } from './src/initApp.js'
dotenv.config()
const app = express()
const port = 3000
initApp(app,express)
process.on('unhandledRejection', (err)=>{
    console.log('error',err)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))