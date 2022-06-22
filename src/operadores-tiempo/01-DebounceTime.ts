import { debounceTime, distinctUntilChanged, fromEvent, map, pluck } from "rxjs";


const click$ = fromEvent(document, 'click')

click$.pipe(
  debounceTime(3000)
)//.subscribe(console.log);

//Ejemplo 2

const input= document.createElement('Input');

document.querySelector('body').append(input);


const input$ = fromEvent(input, 'keyup');

input$.pipe(
debounceTime(1000),
distinctUntilChanged(),
pluck('target', 'value')


)




.subscribe(console.log);
