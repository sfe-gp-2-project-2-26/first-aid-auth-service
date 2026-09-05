import express from 'express';
import { triggerEmergency } from '../controllers/emergencyController.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/trigger', requireAuth, triggerEmergency);

export default router;
