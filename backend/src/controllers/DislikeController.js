const Dev = require('../models/Dev')
class DislikeController {
  async store(req, res) {
    const { user } = req.headers
    const { devId } = req.params

    const loggedDev = await Dev.findById(user)
    const targetDev = await Dev.findById(devId)

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not found' })
    }

    loggedDev.deslikes.push(targetDev._id)

    await loggedDev.save()

    return res.json(loggedDev)
  }
}

module.exports = new DislikeController()
