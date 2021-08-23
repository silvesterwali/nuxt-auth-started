const router = require('express').Router()
// register all router below
router.get('/', (_req, res) => {
  return res.json({ message: 'welcome to special backend' })
})

router.use('/auth', require('./AuthRoute'))
// export the router module
module.exports = router
