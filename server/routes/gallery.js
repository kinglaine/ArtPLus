import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ArtsController from '../controllers/arts.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', ArtsController.getArts)

router.get('/:artId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/art.html'))
});

export default router;