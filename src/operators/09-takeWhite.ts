import { fromEvent, map, takeWhile } from "rxjs";



const click$ = fromEvent<MouseEvent>( document, 'click');


click$.pipe(
   map(({x,y}) => ({x,y})),
  // takeWhile(({y}) => y <= 150)
   takeWhile(({y}) => y <= 150, true) // inclusive el ultimo alor q incumple mostrarlo
)
.subscribe({
   
    next: val=> console.log('next',val),
    complete: () => console.log('complete')
})

   




