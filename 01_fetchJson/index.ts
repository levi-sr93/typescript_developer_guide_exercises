import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

//used to define a structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  //Response.data has properties of
  //id
  //title
  //completed
  const todo = response.data as Todo;

  console.log(todo);

  const { id, title, completed } = todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The todo with id : ${id}
  has a title of: ${title}
  Is it finished? ${completed}
`);
};
