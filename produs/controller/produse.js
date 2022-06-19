const Produs = require('../models/produs');
const pool = require('../../databasepg');
const { getProductById } = require('../../queries');

exports.getAllProducts = async (req, res, next) => {
    try {
        const produse = await Produs.findAll();
        res.status(200).json(produse);
    } catch(err) {
        console.log(err);
    }
};


exports.getProdusById = async (req, res, next) => {
    try{
        const idProdus = req.params.id;
        const produs = await Produs.findByPk(idProdus);
        res.status(200).json(produs);
    } catch (err) {
        console.log(err);
    }
}

exports.addPorduse = (req, res , next) => {
    const nume = req.body.nume;
    const categorie = req.body.categorie;
    const pret = req.body.pret;
    const descriere = req.body.descriere;
    const isNew = req.body.isNew;

    Produs.create({
        nume: nume,
        categorie: categorie,
        pret: pret,
        descriere: descriere,
        isNew: isNew
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
}

exports.editPorduct = async (req, res, next) => {
    const productId = req.params.id;
    try {
        const updatedNume = req.body.nume;
        const updatedCategorie = req.body.categorie;
        const updatedPret = req.body.pret;
        const updatedDescriere = req.body.descriere;
        const updatedIsNew = req.body.isNew;

        const produs = await Produs.findByPk(productId);
        produs.nume = updatedNume;
        produs.categorie = updatedCategorie;
        produs.pret = updatedPret;
        produs.descriere = updatedDescriere;
        produs.isNew = updatedIsNew;
        const result = await produs.save();
        res.json(result);
    } catch(err) {
        console.log(err);
    }
}

exports.deleteProdus = async (req, res, next) => {
    const productId = req.params.id;
    try {
        const produs = await Produs.findByPk(productId);
        console.log(produs);
        const result = await produs.destroy();
        console.log(result);
        res.json({
            message: 'Produsul a fost sters'
        });
    } catch(err) {
        console.log(err);
    }
}