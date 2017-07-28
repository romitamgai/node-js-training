import * as todoDao from '../dao/todo';

export function getAllTodos() {
  return todoDao.fetchAll();
}

export function createTodo(todo) {
  todo.completed = false;

  return todoDao.createTodo(todo);
}
