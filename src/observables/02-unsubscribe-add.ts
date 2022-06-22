import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("completado"),
};

const intervalor$ = new Observable<number>((subscriber) => {
  var cont = 0;

  const interval = setInterval(() => {
    cont++;
    subscriber.next(cont);
    console.log(cont);
  }, 1000);

setTimeout(() => {
    subscriber.complete();

}, 2500)



  return () => {
      clearInterval(interval)
      console.log('intervalo destruido')
  }

  //crear un contador
});

const subs = intervalor$.subscribe(observer);

const subs2 = intervalor$.subscribe(observer);

const subs3 = intervalor$.subscribe(observer);

subs.add(subs2)
subs2.add(subs3)

setTimeout(() => {
  subs.unsubscribe();
/*   subs2.unsubscribe();
  subs3.unsubscribe(); */

  console.log("completado time out");
},3000);
