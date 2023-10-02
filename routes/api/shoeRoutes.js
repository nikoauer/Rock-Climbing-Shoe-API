const router = require('express').Router();
const Shoes = require('../../models/Shoe');

router.get('/', async (req, res) => {
    try {
        const shoeData = await Shoes.findAll();
        res.status(200).json(shoeData);
    } catch (error) {
        console.log('There was an error with retrieving all the shoes', error)
        res.status(500).json(error);
    }
})

module.exports = router;