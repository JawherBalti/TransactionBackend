const { Compte } = require('../models/Compte')

const createCompte = (req, res) => {
  const compte = new Compte({
    libelle: req.body.libelle,
  })
  compte.save()
    .then(compte => res.status(200).json(compte))
    .catch(err => res.status(400).json(err))
}

const getComptes = (req, res) => {
    Compte.find()
    .then(compte => res.status(200).json(compte))
    .catch(err => res.status(404).send(err))
}

const getCompte = (req, res) => {
  Compte.findById(req.params.id)
  .then(compte => res.status(200).json(compte))
  .catch(err => res.status(404).send(err))
}

const deleteCompte = (req, res) => {
    Compte.findByIdAndDelete(req.params.id)
    .then(() => res.send("Compte Supprimé Avec Succes"))
    .catch(err => res.send(err))
}

module.exports = { createCompte, getComptes, getCompte, deleteCompte }
