const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */


const itemsRouter = require("./items/router");
router.use("/items", itemsRouter);

const programsRouter = require("./programs/router");
router.use("/programs", programsRouter );

const categoriesRouter = require("./categories/router");
router.use("/categories", categoriesRouter );

// Import item-related actions
const { sayWelcome } = require("../../controllers/sayActions");

// Route to get a list of items
router.get("/", sayWelcome);


/* ************************************************************************* */

module.exports = router;