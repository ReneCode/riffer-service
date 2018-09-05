const express = require('express')

const router = express.Router()

const config =
{
  drawDurationMs: 6000,
  paintDurationMs: 1500
}

// get configuration
router.get('/', (req, res) => {
  res.json(config);
})

module.exports = router