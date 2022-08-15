const express = require("express");
const router = express.Router();

const CustomerRoute = (customerController) => {
  const { create, list } = customerController();
  router.post("/", create);
  router.get("/", list);
  return router;
};

module.exports = CustomerRoute;
