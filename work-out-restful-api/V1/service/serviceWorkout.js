const workout = require("../database/workout")

const getAllWorks = () => {
  const getAllWork = workout.getAlllworkout()
  return getAllWork
}
//here, i perform the logic to get a particular data from the DB via #id
const getOneWork = (workoutid) => {
  const person = workout.getAlllworkout().find((people) =>
    people.id === Number(workoutid))
  return person
}
const CreateNewWork = () => {
  return
}
const updateOneWork = () => {
  return
}
const deleteOneWork = () => {
  return
}
module.exports = {
  getAllWorks,
  getOneWork,
  CreateNewWork,
  updateOneWork,
  deleteOneWork
}
