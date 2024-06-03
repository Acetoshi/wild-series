const tables = require("../../database/tables");

// Declare the actions
const browse = async (req, res) => {
  const programsFromDB = await tables.program.readAll();

  if (req.query.q != null) {
    const filteredPrograms = programsFromDB.filter((program) =>
      program.synopsis.includes(req.query.q)
    );

    res.json(filteredPrograms);
  } else {
    res.json(programsFromDB);
  }
};

const read = async (req, res) => {
  const programsFromDB = await tables.program.readAll();
  const parsedId = parseInt(req.params.id, 10);

  const program = programsFromDB.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else
module.exports = { browse, read };
