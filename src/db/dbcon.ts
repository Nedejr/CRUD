import mongoose, { Schema } from "mongoose"


const conectaBD = () => {

    try {
        mongoose.connect("mongodb+srv://nedejr:ZRt1GDEQ09GQAJGy@cluster0.mkhsfbi.mongodb.net/?retryWrites=true&w=majority")
        console.log("Conectado no banco MongoDB...")

      } catch (error) {
        console.log("Erro ao conectar no banco MongoDB... " + error)
      }
    
}



mongoose.connect("mongodb+srv://nedejr:ZRt1GDEQ09GQAJGy@cluster0.mkhsfbi.mongodb.net/?retryWrites=true&w=majority")

const User = mongoose.model('User', new Schema({ 
    nome: String, 
    email: String,  
    idade: Number
}))

export{conectaBD, User}