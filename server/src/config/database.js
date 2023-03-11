const Sequelize = require('sequelize');

module.exports =  new Sequelize('epatra','postgres','2505', {
    host: 'localhost',
    dialect: 'postgres',
    logging:false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });