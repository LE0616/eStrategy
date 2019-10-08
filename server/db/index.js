'use strict'

const db = require('./database')
const Course = require('./Course')
const Test = require('./Test')

Course.hasMany(Test)
Test.belongsTo(Course)

module.exports = {
  db,
  Course,
  Test
}
