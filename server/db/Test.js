const Sequelize = require('sequelize')
const db = require('./database')

const Test = db.define('test', {

  course_id: {
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  num_of_questions: {
    type: Sequelize.INTEGER
  },
  duration: {
    type: Sequelize.DECIMAL,
    validate: {
      isDecimal: true
    }
  }
})

module.exports = Test;
