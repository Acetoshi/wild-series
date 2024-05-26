// Declare the action

const sayWelcome = (req, res) => {

  res.send(`Welcome to Wild Series, ${req.query.name} !`);
};

// Export it to import it somewhere else

module.exports = { sayWelcome };
