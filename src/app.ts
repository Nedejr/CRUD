import express from 'express'
import * as dotenv from 'dotenv'
import { router } from './routes/user.routes'
import { conectaBD } from './controllers/user.controller'



dotenv.config()
const app = express()


app.use(express.json())
app.use(router)


app.listen(process.env.PORTA,()=> {
    console.log(`Servidor rodando na porta ${process.env.PORTA} ...` )
    conectaBD()
    
})


