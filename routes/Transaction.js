const express = require('express')
const transactionController = require('../controller/Transaction')

const transactionRouter = express.Router()

transactionRouter.post('/create/:id', transactionController.createTransaction)
transactionRouter.get('/get/:id', transactionController.getTransaction)
transactionRouter.get('/get', transactionController.getTransactions)

module.exports = transactionRouter