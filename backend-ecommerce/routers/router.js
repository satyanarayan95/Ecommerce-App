import express from  'express';
import { userSignUp, userLogIn } from '../controllers/user-controller.js';

const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

export default router;