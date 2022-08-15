const { Sequelize, DataTypes } = require("sequelize");

const dsn = "postgres://postgres:1234@localhost:5432/db_enigmart";

const sequelize = new Sequelize(dsn);

// untuk mengecek apakah sudah terkoneksi atau belum
// const conn = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established succesfully");
//   } catch (err) {
//     console.log("unable to connect to the database", err.message);
//   } finally {
//     await sequelize.close();
//   }
// };

// conn();

//define model
//DataTypes.DATEONLY ==> jika ingin menampilkan tanggal saja
const migration = async () => {
  const Customer = sequelize.define(
    "mst_customer",
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
  await Customer.sync({ alter: true });

  // CRUD Basic
  //   const customer03 = await Customer.create({
  //     name: "Joko Anwar",
  //     address: "Jakarta",
  //     phone: "085678",
  //     email: "joko@ina.com",
  //     balance: 20,
  //   });
  //   console.log(`customer01`, customer03);

  const customer01 = await Customer.findAll();
  console.log(`SELECT * FROM...`);
  console.log(JSON.stringify(customer01, null, 2));

  const customer02 = await Customer.findAll({
    where: { name: "Joko Anwar" },
  });
  console.log(`SELECT * FROM WHERE name...`);
  console.log(JSON.stringify(customer02, null, 2));

  const customer03 = await Customer.findAll({
    order: [["created_at", "desc"]],
  });
  console.log(`SELECT * FROM...ORDER DSC...`);
  console.log(JSON.stringify(customer03, null, 2));

  //findyByOne() ||
  const customer04 = await Customer.findOne({
    where: { name: "Joko Anwar" },
  });
  console.log(`[single row] SELECT * FROM...`);
  console.log(JSON.stringify(customer04, null, 2));

  // findByPk() -> spesifik hanya untuk si primary key
  const customer05 = await Customer.findByPk(
    "8c8b6970-5293-40cf-b74e-ea95f59b3a77"
  );
  console.log(`[single row by pk] SELECT * FROM...`);
  console.log(JSON.stringify(customer05, null, 2));

  //findAndCOuntAll () -> digunakan untuk pagination (page,totalItem) limit, offset
  // Data 3 [1,2,3] (limit1, offset 2) -> menampilkan data ke-3

  //DELETE
  console.log(`DELETE FROM..`);
  const delCustomer01 = await Customer.destroy({
    where: { id: "e420538b-12cc-4472-90d9-f49c74a7e681" },
  });
  //Membalikkan rowCount, 1 = ada datanya, 0 = tidak ada datanya
  console.log(`delCustomer01:`, delCustomer01);

  // select mengikut sertakan deleted_at column is not null
  const customer06 = await Customer.findAll({
    paranoid: false, //untuk menampilkan data yang telah didelete (tapi saat table paranoid : true)
  });
  console.log(`SELECT * FROM... AFTER DELETE WITH PARANOID`);
  console.log(JSON.stringify(customer06, null, 2));

  //Update
  console.log("UPDATE...");
  const upCostumer01 = await Customer.update(
    {
      balance: 1000000,
    },
    {
      where: {
        id: "8c8b6970-5293-40cf-b74e-ea95f59b3a77",
      },
    }
  );
};

migration();
