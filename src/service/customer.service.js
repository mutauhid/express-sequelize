const CustomerService = (CustomerRepo) => {
  const { create, list } = CustomerRepo();
  const registerNewCustomer = async (payload) => {
    try {
      return await create(payload);
    } catch (err) {
      return err.message;
    }
  };

  const findAllCustomer = async () => {
    try {
      return await list();
    } catch (err) {
      return err.message;
    }
  };

  return { registerNewCustomer, findAllCustomer };
};

module.exports = CustomerService;
