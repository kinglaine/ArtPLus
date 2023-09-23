import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import giftData from '../data/gallery.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(giftData)
})

router.get('/:artId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/art.html'))
})

export default router
