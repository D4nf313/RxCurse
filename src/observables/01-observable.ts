import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value ),
    error: error => console.warn('error[obs]:', error),
    complete: () => console.info('completador [obs]' )

};


//const obs$ = Observable.create();

const obs$ = new Observable<string>(subs=> {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();
    

});

/* obs$.subscribe(

  valor =>console.log('nexdt', valor ),
  error => console.warn('error ' , error),
  () => console.info('completado') 
 */
  obs$.subscribe(observer)





