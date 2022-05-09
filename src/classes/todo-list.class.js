import { Todo } from "./todo.class";

//con export para usarlo fuera
export class TodoList {

 //1º Array vacio
 constructor(){
  //this.todos = [];//array de lista vacia
  this.cargarLocalStorage();
 }

 //2º Añadir tareas
 nuevoTodo (todo){
  this.todos.push(todo);//añadir listas de tareas
  this.guardarLocalStorage();
 }

 //3º Borrar lineas lista

 eliminarTodo(id){
                      //si todo es diferente al id que recibo
  this.todos =  this.todos.filter( todo => todo.id != id );
  this.guardarLocalStorage();
    
 }

 //4º Marca completado o no

 marcarCompletado(id){

  for (const todo of this.todos) {
        if(todo.id == id){
            todo.completado = !todo.completado;
            this.guardarLocalStorage();
            break;
        }
  }
 }

 //5º elimino todos los completados
  eliminarCompletado(){

    this.todos =  this.todos.filter( todo => !todo.completado );
    this.guardarLocalStorage();
  }

  guardarLocalStorage(){
                        //keys  , valor--> array lista
    localStorage.setItem('todo', JSON.stringify(this.todos) );//lo paso JSON paRA SER LEIDOS en localstorage 

  }

  //-----------------IMP-------------------
  //para purgar todo en  F12 aplication en Storage en clear site data
  cargarLocalStorage(){
    //si existe la keys
    //Lo hago en operador ternario

    this.todos= (localStorage.getItem('todo'))
                  ? JSON.parse (localStorage.getItem('todo')) 
                  : [];//sino existe arreglo vacio

    //metodo map barre cada uno de los elemntos  dentro de un array y retornar cada uno de esos elemntos mutados -->https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     this.todos = this.todos.map(  Todo.fomJson )
                  
    //esta es la forma simplicada:

    /* if (localStorage.getItem('todo')){

      this.todos = JSON.parse (localStorage.getItem('todo'));
      console.log('cargarLocal: ', this.todos);
      console.log(typeof this.todos);

      //si no existe
    }else{
      this.todos = [];
    } 

  }*/


}

}