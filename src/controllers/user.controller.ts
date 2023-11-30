import express from 'express'
import { users } from '../models/user.model'
import { conectaBD, User } from '../db/dbcon'
const app = express()
app.use(express.json())



const inicio = app.get('/' ,(req, res)=>{
    return res.send("Bem vindo a página inicial - CRUD")
})

const listarUsers = app.get("/users", async (req, res)=>{
    const users =  await User.find()
    return await res.send(users)
    })

const criarUser =  app.post('/users/criarUser/', async (req, res)=>{

    if(!req.body.nome){
        return res.send("Nome não informado")
    }
    if(!req.body.email){
        return res.send("Email não informado")
    }
    if(!req.body.idade){
        return res.send("Idade não informada")
    }

    const user = new User({
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade
    })
    await user.save()
    return res.send(user)

    /* Array
    const ordenado = users.sort( (a,b) =>{
        if (a.id > b.id) {
            return 1
        }
        if (a.id < b.id){
            return -1
        }
        else {
            return 0
        }
    })
    const novoID = ordenado[ordenado.length-1].id + 1
    const novoUser = {
        id: novoID,
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade

    }
    users.push(novoUser)
    res.send(users)
    */
    
})

const buscaUserID = app.get('/users/:id', async (req, res)=>{
    const user = await User.findById(req.params.id)
    return res.send(user)
    /*Array
    const id = parseInt(req.params.id)
    if (isNaN(id)){
        return res.send("Parâmetro inválido!")
    }
    const user = users.find( e => e.id == id)
    if (!user){
        res.send("Usuário não encontrado")
    }
    else{
        res.send(user)
    }
    */
    
   
})

const deletaPorID = app.delete('/users/:id', async (req, res) =>{
    const user = await User.findByIdAndDelete(req.params.id)
    return res.send(user)
    /*Array
    const id = parseInt(req.params.id)
    if (isNaN(id)){
        return res.send("Parâmetro inválido!")
    }
    const user = users.find( (e, i) => {
        if (e.id == id) {
            users.splice(i,1)
            return res.send(users)
        }
      
    })
    if (!user){
        return res.send("Não foi possível deletar. Usuário não encontrado")
    }
    */
    
})

const alteraPorID = app.put('/users/:id', async (req, res) =>{
    const id = parseInt(req.params.id)
    if(!req.body.nome){
        return res.send("Nome não informado")
    }
    if(!req.body.email){
        return res.send("Email não informado")
    }
    if(!req.body.idade){
        return res.send("Idade não informada")
    }
    if (isNaN(id)){
        return res.send("Parâmetro inválido!")
    }
    const user = await User.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade
    }, {
        new : true 
    })
    return res.send(user)
    /*
    const user = users.find( (e) => {
        if (e.id == id) {
            e.nome = nome
            e.email = email
            e.idade = idade
            return res.send(users)
        }
        
    })
    if (!user){
        return res.send("Não foi possível alterar. Usuário não encontrado")
    }
    */
})

export {inicio, listarUsers, buscaUserID, criarUser, deletaPorID, alteraPorID, conectaBD}