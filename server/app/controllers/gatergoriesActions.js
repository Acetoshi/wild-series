const tables = require("../../database/tables");

// Declare the actions

const browse = async (req, res) => {
  const categoriesFromDB = await tables.category.readAll();

  res.json(categoriesFromDB);
};

const read = async (req, res) => {
  const categoriesFromDB = await tables.category.readAll();

  const parsedId = parseInt(req.params.id, 10);

  const category = categoriesFromDB.find((p) => p.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

module.exports = { browse, read };
