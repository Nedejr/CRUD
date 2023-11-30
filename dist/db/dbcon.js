"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.conectaBD = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const conectaBD = () => {
    try {
        mongoose_1.default.connect("mongodb+srv://nedejr:ZRt1GDEQ09GQAJGy@cluster0.mkhsfbi.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado no banco MongoDB...");
    }
    catch (error) {
        console.log("Erro ao conectar no banco MongoDB... " + error);
    }
};
exports.conectaBD = conectaBD;
mongoose_1.default.connect("mongodb+srv://nedejr:ZRt1GDEQ09GQAJGy@cluster0.mkhsfbi.mongodb.net/?retryWrites=true&w=majority");
const User = mongoose_1.default.model('User', new mongoose_1.Schema({
    nome: String,
    email: String,
    idade: Number
}));
exports.User = User;
