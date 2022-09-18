const express = require('express')
const routerV1 = require('./V1/route/workoutRoutes')
// const body=parser = require('body=parser')

const app = express()
const port = process.env.PORT || 3000;
console.log(env.routerV1)

app.use('/api/v1/workout', routerV1)
app.use(express.json)

app.listen(port, function () {
  console.log(`server listening to port ${port}`);
})