//como la voy a usar fuera del archivo utilizo export

export class Todo {

  static fomJson ({tarea, id, completado, creado }){

    const temporalTodo = new Todo( tarea);

 //   temporalTodo.tarea      = tarea;
    temporalTodo.id         = id;
    temporalTodo.completado = completado;
    temporalTodo.creado     = creado;

    return temporalTodo;

  }

 constructor (tarea) {

   this.tarea      = tarea;
   this.id         = new Date().getTime();//el id va a ser hoy pero en tiempo-->(12236446)h/min/seg/mn...actual
   this.completado = false;
   this.creado     = new Date();
 }


 imprimirClase(){
   console.log(`${this.tarea} - ${this.id}`);
 }

}