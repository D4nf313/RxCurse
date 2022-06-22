import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://httpbDin.org/delay/1";

const manejaError = (resp: AjaxError) => {
  console.warn("error", resp.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

/* const obs$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
);
const obs2$ = ajax(url).pipe(
    catchError(manejaError)
); */

const obs$ = ajax.getJSON(url);

const obs2$ = ajax(url);

obs$.pipe(
  catchError( manejaError)

).subscribe({
  next: (val) => console.log("next", val),
  error: (error) => console.log("error en subs ", error),
  complete: () => console.log("complete"),
});

obs2$.subscribe((data) => console.log("ajax:", data));
