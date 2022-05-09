import { crearTodoHtml, saludar } from './js/componentes';
import './styles.css';
import {Todo, TodoList} from './classes';
//import { Todo } from './classes/todo.class'
//import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

const newTodo = new Todo ('Apnrediendo JS');

console.log('todos', todoList.todos);
//-------------------------LOCALESTORAGE-------------------------------
//abrimos con f12 aplication y en storage vemos :(llave/valor)
//localStorage.setItem('mi-key', 'ABC1234');//aguanta hasta un reinicio del pc
//sessionStorage.setItem('mi-key', 'ABC123');//se borra todo cuando  cerramops navegador web
//para eliminar en 1,5 seg se borra la llave


//pongo tiempo de duracion visible de la llave--> 1.5seg
/*  setTimeout( ()=> {

 localStorage.removeItem('mi-key');

}, 1500);  */