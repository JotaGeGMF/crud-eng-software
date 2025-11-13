import express from 'express'
import cors from 'cors'
import connection from './db/connection.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("sevidor backend funcionando!")
})

export default app