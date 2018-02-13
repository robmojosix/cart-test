import Express from 'express'
const app = Express()
import Index from './src/index.js'

app.get('/', function (req, res) {
  res.send(Index)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
