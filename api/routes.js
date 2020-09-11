const controller = require("./controller");

module.exports = (app) => {
  app.route("/api/signup").post(controller.signup);
  app.route("/api/login").post(controller.login);

  app.get("*", (req, res) => {
    res.send({ response: "Seems like you took a wrong turn" });
  });
};
