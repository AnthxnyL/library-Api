import express from 'express';
import { getBookStats } from '../controllers/statController.js';
const router = express.Router();

router.get('/stats', getBookStats);

export default router;