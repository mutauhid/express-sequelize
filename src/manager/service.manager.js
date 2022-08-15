const CustomerService = require("../service/customer.service");

const ServiceManager = (repoManager) => {
  const { customerRepo } = repoManager();

  //semua repo
  const customerService = () => {
    return () => CustomerService(customerRepo());
  };
  return { customerService };
};

module.exports = ServiceManager;
