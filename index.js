const Customer = require("./src/model/customer");
const DbMigration = require("./src/config/db-migration");

const run = async () => {
  await DbMigration();

  // CRUD Basic
  //   const addCustomer01 = await Customer().bulkCreate([
  //     {
  //       name: "Joko Anwar",
  //       address: "Jakarta",
  //       phone: "085678",
  //       email: "joko@ina.com",
  //       balance: 20,
  //     },
  //     {
  //       name: "Iko Uwais",
  //       address: "Bandung",
  //       phone: "081378",
  //       email: "Iko@ina.com",
  //       balance: 20,
  //     },
  //     {
  //       name: "Tara Basro",
  //       address: "Kuninga",
  //       phone: "08975",
  //       email: "Tara@ina.com",
  //       balance: 20,
  //     },
  //     {
  //       name: "Flora Shafiq",
  //       address: "Jakarta",
  //       phone: "09847",
  //       email: "flora@ina.com",
  //       balance: 20,
  //     },
  //   ]);
  //   console.log(`customer01`, addCustomer01);

  const customer01 = await Customer().findAll();
  console.log("SELECT * FROM ...");
  console.log(JSON.stringify(customer01, null, 2));
};

run();
