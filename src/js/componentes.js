import { Todo, TodoList } from "../classes";
import { todoList } from '../index'

//Referencias
 const divTodoList   = document.querySelector('.todo-list');
 const txtInput      = document.querySelector('.new-todo');
 const btnBorrar     = document.querySelector('.clear-completed');
 const ulFilter      = document.querySelector('.filters');
 const anchoFiltros  = document.querySelectorAll('.filtro');


export const crearTodoHtml = (todo) => {
                            //si completado es true entonvces pongo la clase completed
    const htmlTodo = `<li class="${ (todo.completado)? 'completed': '' }" data-id="${todo.id}">
                        <div class="view">
                            <input class="toggle" type="checkbox" ${ (todo.completado)? 'checked': '' }>
                            <label>${todo.tarea}</label>
                            <button class="destroy"></button>
                        </div>
                            <input class="edit" value="Create a TodoMVC template">
                     </li>`;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);
    return div.firstElementChild;
}

 //eventos
  
    txtInput.addEventListener('keyup', (e) => {
        //el numero es el enter ; si presiona enter creo nuevo elemnto a lista
        //si presiono enter y txtimput esta vacio
            if(e.keyCode === 13 && txtInput.value.length > 0) {
               
                const nuevoTodoLista = new Todo(txtInput.value);
                todoList.nuevoTodo( nuevoTodoLista );
                
                crearTodoHtml(nuevoTodoLista);
                txtInput.value = '';
            }
    });

    divTodoList.addEventListener('click', (e) => {
      
        //El e.target.localName) nos dice donde esta haciendo click input/label/button
        const nombreInputLabelBtn = e.target.localName;
        //console.log(nombreInputLabelBtn);
        const todosElemntos       = e.target.parentElement.parentElement;
        const todoId              = todosElemntos.getAttribute('data-id')
    
        if(nombreInputLabelBtn.includes('input')){//si hizo click en el input
            todoList.marcarCompletado(todoId);
            todosElemntos.classList.toggle('completed');//para que salgan con la rayita encima de tachado
        }else if( nombreInputLabelBtn.includes('button')){
            todoList.eliminarTodo(todoId);
            divTodoList.removeChild(todosElemntos)
        }
        
    });

    btnBorrar.addEventListener('click', (e) => {

        todoList.eliminarCompletado();

        for (let i = divTodoList.children.length-1; i>=0; i-- ) {
            const elemnto = divTodoList.children[i];
            if(elemnto.classList.contains('completed')){//si en la clase contiene completed borrarlo de la lista
                divTodoList.removeChild(elemnto);
            }
            
        }
    });

    ulFilter.addEventListener('click' , (e) => {
        console.log(e.target.text);
        const filtro = e.target.text;

        if(!filtro){return;}

        anchoFiltros.forEach(element => element.classList.remove('selected'));
        e.target.classList.add('selected');

        for (const e of divTodoList.children) {
            
            e.classList.remove('hidden');
            const completado = e.classList.contains('completed');

            switch( filtro ){

                case 'Pendientes':
                    //si esta complatado entonces acultalo
                   if( completado){
                    e.classList.add('hidden')
                   }
                   break;

                   case 'Completados':
                    //si esta complatado entonces acultalo
                   if( !completado){
                    e.classList.add('hidden')
                   }
                   break;
              
            }
            
        }

    });