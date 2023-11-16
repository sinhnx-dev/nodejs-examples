const bcrypt = require("bcrypt")
const saltRounds = 17
const password = "Admin@123"

bcrypt
  .hash(password, saltRounds)
  .then(hash => {
    console.log('Hash ', hash)
  })
  .catch(err => console.error(err.message))