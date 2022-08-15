const CustomerRepository = require("../repository/customer.repository");

const RepositoryManager = (InfraManager) => {
  const { initDb } = InfraManager();
  const db = initDb();

  //semua repo
  const customerRepo = () => {
    return () => CustomerRepository(db);
  };

  return {
    customerRepo,
  };
};

module.exports = RepositoryManager;
