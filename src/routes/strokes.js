const express = require('express')
const HttpStatus = require('http-status-codes')

const router = express.Router()

const entities = [
  { id: 1, name: 'abc' },
  { id: 2, name: 'xyz' }
]

// get all entities
router.get('/', (req, res) => {
  res.json(entities);
})

// get one entity
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const result = entities.find(e => e.id === id);
  if (result) {
    res.json(result);
  } else {
    res.status(HttpStatus.NOT_FOUND);
    res.send(`Id:${id} not found`)
  }
})

router.post('/', (req, res) => {
  // data from body (using body-parser)
  const stroke = req.body
  const newStroke = {}
  if (stroke.points) {
    newStroke.points = stroke.points.map(p => {
      return {
        x: p.x + 10,
        y: p.y + 50
      }
    })
  }
  res.json(newStroke)
})

module.exports = router