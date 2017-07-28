import { Router } from 'express';
import todoController from './controllers/todos';

/**
 * Contains all API routes for the application.
 */
let router = Router();

router.get('/', (req, res) => {
  res.json({
    text: 'Hello world'
  });
});

router.use('/todos', todoController);

export default router;
