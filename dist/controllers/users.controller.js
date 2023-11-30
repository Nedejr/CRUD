"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarUsers = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const users = [{ nome: "Nede", email: "nedejr@gmail.com", idade: 49 },
    { nome: "Maria", email: "maria@gmail.com", idade: 30 },
    { nome: "João", email: "joao@gmail.com", idade: 20 }
];
const listarUsers = app.get("/users", (req, res) => {
    res.send(users);
});
exports.listarUsers = listarUsers;
