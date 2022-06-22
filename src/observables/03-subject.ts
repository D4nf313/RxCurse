import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>(  subs => {
  const intervalID = setInterval(
    () => subs.next (   Math.random()) , 1000
     );
    return () => {
      clearInterval (intervalID);
    console.log('intervalo destruido')
    }
   });

//propiedades del subject
//casteo multiple, tambn es observable, , maneja next error y complete

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1= subject$.subscribe(observer); 
const subs2= subject$.subscribe(observer);
setTimeout(() => {
  subject$.next(10);

  subject$.complete();

  subscription.unsubscribe()
} ,3500)

