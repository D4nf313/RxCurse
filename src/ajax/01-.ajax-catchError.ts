import { catchError, map, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/userXXXs?per_page=5';


const manejaErrores = ( response: Response ) => {
   if(!response.ok){
     throw new Error (response.statusText);
        }
    return response
}

const atrapaErrores = (err: AjaxError) => {
    console.warn('error en: ' , err.message);
    return of([]);
}

const fetchPromesa = fetch (url);
/* 
fetchPromesa.
   then(resp => resp.json())
   .then(data => console.log('data', data))
   .catch(err => console.warn('error en usuaros' , err))
   */
  
  
/*    fetchPromesa.
   then (manejaErrores)
   .then(resp => resp.json())
   .then(data => console.log('data', data))
   .catch(err => console.warn('error en usuaros' , err)) */
   

   ajax( url).pipe(
       pluck('response'),
       catchError(atrapaErrores)
   
   )  
   .subscribe(users => console.log('usuarios:' , users));