const express = require('express')

const router = express.Router()

const config =
{
  drawDuration: 8,
  paintDuration: 2
}

// get configuration
router.get('/', (req, res) => {
  res.json(config);
})

module.exports = router