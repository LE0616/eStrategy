const Sequelize = require('sequelize')
const db = require('./database')

const Course = db.define('course', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  domain: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    }
  }
})

module.exports = Course;
