import {
  asyncScheduler,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  pluck,
  throttleTime,
} from "rxjs";

const click$ = fromEvent(document, "click");

click$.pipe(throttleTime(3000))    //.subscribe(console.log);

//Ejemplo 2

const input = document.createElement("Input");

document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");

 input$
  .pipe(
    throttleTime(1000, asyncScheduler,{
      leading: true,
      trailing: true
    }),
    distinctUntilChanged(),

    pluck("target", "value")
  )

  .subscribe(console.log);
 