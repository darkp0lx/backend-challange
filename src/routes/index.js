const { Router } = require('express')
const User = require('../models/User')
const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})

/* method post (register)*/
router.post('/api/users', async (req, res) => {
  const { email, password, names, lastNames, numberPhone, birthday } = req.query
  const newUser = new User({
    password: password,
    email: email,
    names: names,
    lastNames: lastNames,
    birthday: birthday,
    numberPhone: numberPhone
  })

  try {
    console.log(newUser, 'userNews')
    const userSaved = await newUser.save()
    res.json(userSaved)
  } catch (err) {
    console.log(err)
  }
})
router.get('/api/users', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (e) {
    console.log(e)
  }
})

module.exports = router
