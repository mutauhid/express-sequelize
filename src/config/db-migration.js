const Customer = require("../model/customer");

const DbMigration = async (db) => {
  //Register your models here
  await Customer(db).sync();
};

module.exports = DbMigration;
