import express, { Router } from 'express';
// Import index action from cinemas controller
import { getCinemaList } from './api/cinema_controller';

// Initialize the router
const router = Router();

// Handle /getCinemas route with index action from cinemas controller
router.route('/getCinemas')
  .get(getCinemaList);

export default router;