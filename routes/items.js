const Item = require('../item');
const express = require('express');

const router = express.Router();

router.get('/', function (req, res, next) {
    try {
        return res.json({ items: Item.findAll()});
    } catch(err){
        return next(err)
    }
});

router.post('/', function (req, res, next) {
    try {
        let newItem = new Item(req.body.name, req.body.price);
        return res.json({item: newItem})
    } catch (err) {
        return next(err)
    }
});

router.get(':/name', function (req, res, next) {
    try {
        let getItem = Item.find(req.params.name)
        return res.json({item: getItem})
    } catch (err) {
        return next(err)
    }
});

router.patch(':/name', function (req, res, next) {
    try {
        let getItem = Item.update(req.params.name, req.body)
        return res.json({item: getItem})
    } catch (err) {
        return next(err)
    }
});

router.delete(':/name', function (req, res, next) {
    try {
        let getItem = Item.delete(req.params.name);
        return res.json({message:'Deleted'});
    } catch (err) {
        return next(err)
    }
});

module.exports = router;

