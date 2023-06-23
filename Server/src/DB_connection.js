require("dotenv").config();
const { Sequelize } = require("sequelize");
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
  { logging: false, native: false }
);

FavoriteModel(sequelize);
UserModel(sequelize);

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "user_favorite", timestamps: false });
Favorite.belongsToMany(User, { through: "user_favorite", timestamps: false });

module.exports = {
  conn: sequelize,
};
