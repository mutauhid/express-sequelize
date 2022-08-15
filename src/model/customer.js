const { DataTypes } = require("sequelize");
const MST_CUSTOMER = "mst_customer";

module.exports = (db) => {
  return db.define(
    MST_CUSTOMER,
    {
      id: {
        //untuk memberikan unique id pada colum id
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false, //defaultnya boleh Null
      },

      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      balance: DataTypes.INTEGER,
      isStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      //   freezeTableName: true, //untuk memberikan nama table sesuai keinginan (tidak berbentuk jamak)
      underscored: true, //untuk menghilangkan camel case pada nama column
      paranoid: true,
    }
  );
};
