"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const inicial = express_1.default.Router();
const router = express_1.default.Router();
exports.router = router;
router.route('/').get(user_controller_1.inicio);
router.route('/users').get(user_controller_1.listarUsers);
router.route('/users/:id').get(user_controller_1.buscaUserID).delete(user_controller_1.deletaPorID).put(user_controller_1.alteraPorID);
router.route('/users/criarUser').post(user_controller_1.criarUser);
