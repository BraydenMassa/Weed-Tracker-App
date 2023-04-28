import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import Routes from './routes/Routes'

dotenv.config()


const app = express()

mongoose.connect(process.env.DB_ACCESS, () => console.log('DB connected'))

app.use(express.json())
app.use(cors())

//Routes

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))