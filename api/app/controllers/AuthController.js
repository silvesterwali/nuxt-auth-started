/**
 *========================
 * - @copyright 2021
 *
 **/

/**
 * get user data
 *
 * @param {express.Request} req
 * @param {express.Res} res
 * @async
 **/
exports.me = (req, res) => {
  return res.json(req.user)
}

/**
 * store newly resouce to storage
 *
 * @param {express.Request} req
 * @param {express.Res} res
 * @async
 **/
exports.logout = (req, res) => {
  return res.json({ message: 'Log out success' })
}
