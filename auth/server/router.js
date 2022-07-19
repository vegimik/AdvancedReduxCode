const Authentication = require('./controllers/authentication')
const passportService=require('./services/passport')
const passport =require('passport')

const requireAuth=passport.authenticate('jwt', {session: false})

module.exports = function (app) {
  app.get('/', requireAuth, function (req, res) {
    res.send({ message: 'While you got this message it means you were authorized.' })
  })
  app.post('/signup', Authentication.signup)
}
