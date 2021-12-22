const express = require('express')
const compteController = require('../controller/Compte')

const compteRouter = express.Router()

compteRouter.post('/create', compteController.createCompte)
compteRouter.get('/get', compteController.getComptes)
compteRouter.get('/getOne/:id', compteController.getCompte)
compteRouter.delete('/delete/:id', compteController.deleteCompte)

module.exports = compteRouter