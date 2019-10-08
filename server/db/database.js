'use strict'

const Sequelize = require('sequelize')

console.log('Opening database connection')

const db = new Sequelize('eStrategy', 'root', 'MyServerLM#1',
{
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: false
})

db.authenticate()
    .then(function () {
        console.log('Connected!');
    })
    .catch(function (err) {
        console.log('Something went wrong: ', err);
    })
    .done();


module.exports = db
