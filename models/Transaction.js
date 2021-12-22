const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    montant: {
        type: Number,
        required: true
    },
    compte: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Compte" ,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    descriptif: {
        type: String,
        required: true
    }
})

const Transaction = mongoose.model("Transaction", TransactionSchema)

module.exports = {Transaction}