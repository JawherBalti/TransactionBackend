const mongoose = require('mongoose')

const CompteSchema = mongoose.Schema({
    libelle: {
        type: String,
        required: true
    }
})

const Compte = mongoose.model("Compte", CompteSchema)

module.exports = {Compte}