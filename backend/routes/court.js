const express = require('express');
const router = express.Router();
const Court = require('../models/Court');


router.get('/:id', async (req, res) => {
    let court = await Court.findById(req.params.id);
    res.send(court);
});


router.post('/', async (req, res) => {
    let court = new Court({
        name: req.body.name,
        address: req.body.address,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        reviews: [],
    });
    await court.save();
    res.send(court);
});

router.delete('/:id', async (req, res) => {
    let court = await Court.findByIdandDelete(req.params.id);
    res.send(court);
});


module.exports = router;