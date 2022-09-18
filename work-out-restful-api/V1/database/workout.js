const DB = require('./db.json')
//const { saveToDatabase } = require('./utils')

const getAlllworkout = () => {
  return DB.workouts
}
module.exports = { getAlllworkout }