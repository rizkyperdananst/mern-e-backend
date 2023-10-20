import { Sequelize } from "sequelize";

const db = new Sequelize("mern_ecommerce", "root", "", {
  host: "localhost",
  dialect: "mysql",
//   logging: false,
});

export default db;