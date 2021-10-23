const express = require('express')
const app = express()
const port = 3000
const Logger = require('./Logger');
const logger = new Logger();

app.get('/', logger.run);

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}\n`)
})