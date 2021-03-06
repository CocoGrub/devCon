const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {
    // get token from header
    const token = req.header('x-auth-token')
        // check if not token
    if (!token) {
        return res.status(401).json({ msg: 'no token,authorization denied' })
    }
    //verify token
    try {

        const decoded = jwt.decode(token, config.get("jwtSecret")) //decode token
        req.user = decoded.user //assign req.user decoded
        next()
    } catch (err) {
        res.json(401).json({ msg: "token is not valid" })
    }
}