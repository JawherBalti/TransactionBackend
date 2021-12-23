const mongoose  = require('mongoose')
const { Transaction } = require('../models/Transaction')

const createTransaction = (req, res) => {
    const transaction = new Transaction({
        montant: req.body.montant,
        compte: mongoose.Types.ObjectId(req.params.id),
        date: Date.now(),
        descriptif: req.body.descriptif
    })

    transaction.save()
    .then(() => res.json("Transaction Créée Avec Succès!"))
    .catch(err => res.send(err))
}

const getTransactions = (req, res) => {
    Transaction.find().populate({path: "compte"})
    .then(transaction => res.json(transaction))
    .catch(err => res.send(err))
}

const getTransaction = (req, res) => {
    Transaction.findById(req.params.id)
    .then(transaction => res.json(transaction))
    .catch(err => res.status(400).json(err))
}

module.exports = { createTransaction, getTransactions, getTransaction }