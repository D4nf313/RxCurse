import { asyncScheduler } from "rxjs";

// setTimeout(() => { } , 3000)

// setInterval(() => { } , 3000)

const saludas = () => console.log("Hola Mundo ");

const saludas2 = (nombre) => console.log(`Hola ${nombre}`);
//asyncScheduler.schedule(saludas,2000);

//asyncScheduler.schedule(saludas2, 2000, "Fernando");

const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);

    this.schedule(state + 1, 1000); //se crea el intervao sumando uno cada segundo
  },
  5000,   //inicia ejecucion a los 5 seg 
  0
);

setTimeout(() => {
  subs.unsubscribe();
}, 6000);


asyncScheduler.schedule(() => subs.unsubscribe(),6000)