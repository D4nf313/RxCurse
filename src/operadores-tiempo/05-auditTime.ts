import { auditTime, fromEvent, interval, map, sample, tap} from "rxjs";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map(({x}) => x),
    tap(val => console.log('tap',val)),
    auditTime(2000)
     
).subscribe(console.log);
