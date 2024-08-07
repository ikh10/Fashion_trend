const rootcontroller = (req, res) => {
    res.status(200).send(
      "<h1>welcome to fashion trends</h1>",
    );
  };
  module.exports = rootcontroller;