import express from 'express';
import mongoose from 'mongoose';
import { signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;