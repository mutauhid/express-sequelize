// ini akan mengumpulkan semua route yang ada
// kemarin ini index.js

const express = require("express");
const router = express.Router();

const AppRoute = (customerRoute) => {
  router.use("/customers", customerRoute);
  return router;
};

module.exports = AppRoute;
