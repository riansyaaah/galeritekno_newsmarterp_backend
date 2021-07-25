'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

function* walkSync(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (let i = 0; i < files.length; i++) {
    if (files[i].isDirectory()) {
      yield* walkSync(path.join(dir, files[i].name));
    } else {
      yield path.join(dir, files[i].name);
    }
  }
}

for (let i of walkSync(__dirname)) {
  if ((i.indexOf('.') !== 0) && (i !== basename) && (i.slice(-3) === '.js')) {
    if (i.search("index.js") < 0) {
      const model = require(i)(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    }
  }
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.HrmPegawai.belongsTo(db.AuthUser, { foreignKey: 'iduser' })
db.AuthUser.hasOne(db.HrmPegawai, { foreignKey: 'iduser' })

module.exports = db;
