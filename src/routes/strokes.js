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

// req can be array or single object
router.post('/', (req, res) => {

  const random = max => {
    return Math.floor( (-1 * max / 2) + Math.random() * max )
  }

  const modifyStroke = stroke => {
    if (stroke.points) {
      const points = stroke.points.map(p => {
        return {
          x: p.x + random(40),
          y: p.y + random(40)
        }
      })
      return {
        ...stroke,
        points
      }
    } else {
      return stroke
    }
  }

  const input = req.body;
  let result;
  if (Array.isArray(input)) {
    result = input.map(stroke => {
      return modifyStroke(stroke);
    })
  } else {
    result = modifyStroke(input);
  }

  res.json(result)
})

module.exports = router