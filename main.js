'use strict'

const {db} = require('./server/db')
const app = require('./server')
const PORT = 1337

db.sync ()
  .then(() => {
    console.log('Database synced')
    app.listen(PORT, () => console.log(`Serving on port ${PORT}`))
  })
