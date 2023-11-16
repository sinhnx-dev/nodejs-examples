const bcrypt = require("bcrypt")
const saltRounds = 17
const password = "Admin@123"

bcrypt
    .genSalt(saltRounds)
    .then(salt => {
        console.log('Salt: ', salt)
        return bcrypt.hash(password, salt)
    })
    .then(hash => {
        console.log('Hash: ', hash)
    })
    .catch(err => console.error(err.message))