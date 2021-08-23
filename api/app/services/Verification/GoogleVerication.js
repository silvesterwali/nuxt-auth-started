/* eslint-disable camelcase */
const { OAuth2Client } = require('google-auth-library')
const db = require('../../db').db
const client = new OAuth2Client(process.env.CLIENT_ID)
const auth = async (req, res, next) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: req.headers.authorization,
      audience: process.env.CLIENT_ID,
    })
    const {
      name,
      email,
      email_verified,
      picture,
      given_name,
      family_name,
      profile,
    } = await ticket.getPayload()
    const user = await db.collection('users').findOneAndUpdate(
      {
        email,
      },
      {
        $set: {
          name,
          email,
          email_verified,
          picture,
          given_name,
          family_name,
          profile,
          rule: 'customer',
          isActive: true,
          joinDate: new Date(),
        },
      },
      {
        upsert: true,
        arrayFilters: [
          'profile',
          'email_verified',
          'given_name',
          'family_name',
        ],
      }
    )
    req.user = {
      _id: user._id,
      name: user.name,
      emai: user.email,
      email_verified: user.email_verified,
      picture: user.picture,
      given_name: user.given_name,
      family_name: user.family_name,
      profile: user.profile,
      rule: user.role,
      isActive: user.isActive,
      joinDate: user.joinDate,
    }
    return next()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err)
    return res.status(403).json({ message: 'Access is not Authorization' })
  }
}

module.exports = auth
