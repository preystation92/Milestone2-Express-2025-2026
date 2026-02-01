import express from 'express'

export default function cardRouter() {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send("Overzicht van alle kaarten")
  })
  return router
}


