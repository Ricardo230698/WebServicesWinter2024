// Importing the database connection
const mongodb = require('../ConnectionDB/mongodb');
const ObjectId = require('mongodb').ObjectId;

const getAllData = async (req, res, next) => {
    const result = await mongodb.getDb().db('users').collection('contacts').find();
    result.toArray().then(lists => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    })    
}

const getDataById = async (req, res, next) => {
    const id = new ObjectId(req.params.id);
    
    const result = await mongodb.getDb().db('users').collection('contacts').findOne( { _id: id } );
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
}

module.exports = {
    getAllData,
    getDataById
}