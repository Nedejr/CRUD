import express from "express";
import { inicio, listarUsers, buscaUserID, criarUser, deletaPorID, alteraPorID } from "../controllers/user.controller";

const router = express.Router();

router.route('/').get(inicio)
router.route('/users').get(listarUsers)
router.route('/users/:id').get(buscaUserID).delete(deletaPorID).put(alteraPorID)
router.route('/users/criarUser').post(criarUser) 

export {router}