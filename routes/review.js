const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn } = require("../middleware.js");

const reviewController = require("../controller/reviews.js");


//REVIEWS Route
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//DELETE REVIEW Route
router.delete("/:reviewId",isLoggedIn, wrapAsync(reviewController.destroyReview));


module.exports = router;
