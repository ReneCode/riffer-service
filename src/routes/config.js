const express = require('express')

const router = express.Router()

const config =
{
  drawDuration: 6000,
  paintDuration: 1500
}

// get configuration
router.get('/', (req, res) => {
  res.json(config);
})

module.exports = router