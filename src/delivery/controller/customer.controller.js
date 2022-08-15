const Response = require("../../utils/response");

const CustomerController = (customerService) => {
  const { registerNewCustomer, findAllCustomer } = customerService();

  const create = async (req, res) => {
    try {
      const payload = req.body;
      const customer = await registerNewCustomer(payload);
      res.json(Response().successMessage(res.statusCode, "Succes", customer));
    } catch (err) {
      res
        .status(400)
        .json(Response().errorMessage(res.statusCode, err.message));
    }
  };

  const list = async (req, res) => {
    try {
      const costumers = await findAllCustomer();
      res.json(Response().successMessage(res.statusCode, "Succes", costumers));
    } catch (err) {
      res
        .status(400)
        .json(Response().errorMessage(res.statusCode, err.message));
    }
  };
  return { create, list };
};

module.exports = CustomerController;
