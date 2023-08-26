const express = require('express');
const router = express.Router();
const Court = require('../models/Court');


router.get('/court/:id', async (req, res) => {
    let court = await Court.findById(req.params.id);
    res.send(court);
});


router.post('/court', async (req, res) => {
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

router.delete('/court/:id', async (req, res) => {
    let court = await Court.findByIdandDelete(req.params.id);
    res.send(court);
});


module.exports = router;