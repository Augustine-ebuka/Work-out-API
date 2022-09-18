const workOutService = require('../../V1/service/serviceWorkout')
const data = require("../../V1/database/db.json")
// second method to import getAllWorks const { getAllWorks } = require("../service/serviceWorkout")
//const { getAlllworkout } = require('../database/workout')

const getAllWorks = (req, res) => {
  const getAllWorkout = workOutService.getAllWorks()
  res.status(201).json({ status: "OK", data: getAllWorkout })
}
const getOneWork = (req, res) => {
  const { workoutid } = req.params
  const getonwwork = workOutService.getOneWork(workoutid)
  if (workoutid > data.workouts.length || workoutid > data.workouts.length) {
    return res.status(201).json({ status: "OK", data: `data not found: ${data.workouts.length} available` })
  }
  res.status(201).json({ status: "OK", data: getonwwork })
}
const CreateNewWork = (req, res) => {
  workOutService.CreateNewWork
  res.send('create one here')
}
const updateOneWork = (req, res) => {
  workOutService.updateOneWork
  res.send('update work here')
}
const deleteOneWork = (req, res) => {
  workOutService.deleteOneWork
  res.send('delete one work here')
}

module.exports = {
  getAllWorks,
  getOneWork,
  CreateNewWork,
  updateOneWork,
  deleteOneWork
}