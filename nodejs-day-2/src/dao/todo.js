let todos = [
  {
    id: 1,
    completed: true,
    name: 'Learn Node JS',
    timestamp: new Date().toISOString()
  }
];

export function fetchAll() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(todos);
    }, 500);
  });
}

export function createTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todo.id = todos.length + 1;
      todo.timestamp = new Date().toISOString();

      todos.push(todo);
      resolve(todo);
    }, 1000);
  });
}
