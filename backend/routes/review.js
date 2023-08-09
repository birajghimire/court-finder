const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.get('/review/:id', async (req, res) => {
    let review = await Review.findbyId(req.params.id);
    res.send(review);
});


router.post('/review', async (req, res) => {
    let review = new Review({
        reviewerName: req.body.reviewerName,
        reviewerId: req.body.reviewerId,
        courtName: req.body.courtName,
        courtId: req.body.courtId,
        stars: req.body.stars,
        comment: req.body.comment,
    });
    await review.save();
    res.send(review);
});

router.delete('/review/:id', async (req, res) => {
    let review = await Review.findbyIdandDelete(req.params.id);
    res.send(review);
});