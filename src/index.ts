

//Creando un formulario

import { fromEvent, map, mergeMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


const form = document.createElement('form');
const inputEmail =document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');





//Helper

const peticionHttpLogin= (userpass) => ajax({
    method: 'POST',
    url: 'https://regres.in/api/login?delay=1',
    responseType: "json",
    body: userpass,
    crossDomain: true,
    
    headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*"
    }
 
  });
/*   ajax.post('https://regres.in/api/login?delay=1',userpass )  */







//Configuraciones

inputEmail.type= 'email';
inputEmail.placeholder= 'Email';
inputEmail.value='eve.holt@reqres.in'


inputPass.type= 'password';
inputPass.placeholder= 'Password';
inputPass.value='cityslicka'

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);


//Streams

const submitForm$= fromEvent(form, 'submit')
.pipe(
    tap( ev => ev.preventDefault()),
    map(ev => ({       
        email: ev.target[0].value,
        password:ev.target[1].value
    })),
    //mergeMap(userPass => peticionHttpLogin(userPass)) es lo mismo q la linea de abajo
    mergeMap(peticionHttpLogin)

);

submitForm$.subscribe(token => {
      console.log(token);
})


