import {Router} from 'express';
import HttpStatus from 'http-status-codes';
import * as todoService from '../services/todos';
// import requestValidator from '../validators/requestValidator';

let router = Router();

router.get('/', (req, res, next) => {
  todoService.getAllTodos()
    .then(todos => res.json({data: todos}))
    .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  todoService.createTodo(req.body)
    .then(data => res.json({data}))
    .catch(err => next(err));
});

export default router;
