const express = require('express')
const rout = express.Router()
const workOutController = require("../../V1/controller/workoutController")


rout.get('/', workOutController.getAllWorks)
rout.get('/:workoutid', workOutController.getOneWork)
rout.post('/', workOutController.CreateNewWork)
rout.patch('/:workoutid', workOutController.updateOneWork)
rout.delete('/', workOutController.deleteOneWork)

module.exports = rout








