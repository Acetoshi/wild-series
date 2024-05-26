const express = require("express");
const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read } = require("../../../controllers/gatergoriesActions");

// Route to browse categories
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);
/* ************************************************************************* */

module.exports = router;
