import { Sequelize, DataTypes } from "sequelize";

const conn = new Sequelize("crud_toko", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export { DataTypes };
export default conn;