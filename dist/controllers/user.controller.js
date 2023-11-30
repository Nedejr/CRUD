"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectaBD = exports.alteraPorID = exports.deletaPorID = exports.criarUser = exports.buscaUserID = exports.listarUsers = exports.inicio = void 0;
const express_1 = __importDefault(require("express"));
const dbcon_1 = require("../db/dbcon");
Object.defineProperty(exports, "conectaBD", { enumerable: true, get: function () { return dbcon_1.conectaBD; } });
const app = (0, express_1.default)();
app.use(express_1.default.json());
const inicio = app.get('/', (req, res) => {
    return res.send("Bem vindo a página inicial - CRUD");
});
exports.inicio = inicio;
const listarUsers = app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield dbcon_1.User.find();
    return yield res.send(users);
}));
exports.listarUsers = listarUsers;
const criarUser = app.post('/users/criarUser/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.nome) {
        return res.send("Nome não informado");
    }
    if (!req.body.email) {
        return res.send("Email não informado");
    }
    if (!req.body.idade) {
        return res.send("Idade não informada");
    }
    const user = new dbcon_1.User({
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade
    });
    yield user.save();
    return res.send(user);
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
}));
exports.criarUser = criarUser;
const buscaUserID = app.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield dbcon_1.User.findById(req.params.id);
    return res.send(user);
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
}));
exports.buscaUserID = buscaUserID;
const deletaPorID = app.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield dbcon_1.User.findByIdAndDelete(req.params.id);
    return res.send(user);
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
}));
exports.deletaPorID = deletaPorID;
const alteraPorID = app.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    if (!req.body.nome) {
        return res.send("Nome não informado");
    }
    if (!req.body.email) {
        return res.send("Email não informado");
    }
    if (!req.body.idade) {
        return res.send("Idade não informada");
    }
    if (isNaN(id)) {
        return res.send("Parâmetro inválido!");
    }
    const user = yield dbcon_1.User.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade
    }, {
        new: true
    });
    return res.send(user);
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
}));
exports.alteraPorID = alteraPorID;
