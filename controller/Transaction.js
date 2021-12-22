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
    .then(transaction => res.send(transaction))
    .catch(err => res.send(err))
}

const getTransaction = async (req, res) => {
    Transaction.find().populate({path: "compte"})
    .then(transaction => res.json(transaction))
    .catch(err => res.send(err))
}

module.exports = { createTransaction, getTransaction }