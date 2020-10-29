import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { retry } from 'rxjs/operators';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  public obs1: Observable<any>;
  public contador: number = 0;
  public intervalo: any;
  public myObserver = {
    next(x) { console.log('respuesta', x) },
    error(error) { console.log('error', error) },
    complete() { console.log('completado')},
  }

  constructor() { }

  ngOnInit(): void {
    this.obs1 = new Observable(subscriber => {
      subscriber.next('Primera respuesta ');

      this.intervalo = setInterval(() => {
        this.contador++;
        console.log('contador intervalo', this.contador);
        if (this.contador === 10) {
          clearInterval(this.intervalo);
          subscriber.error('no puede ser igual a 10');
        } else if (this.contador === 15) {
          clearInterval(this.intervalo);
          subscriber.complete();
        } else {
          subscriber.next(this.contador);
        }


      }, 100);
    });

   /*  this.obs1.pipe(retry(2)).subscribe(resp => {
      console.log('resp', resp);

    },
      error => {
        console.log('error', error);
      },
      () => {
        console.log('subscripción completa');

      }

    ); */
    this.obs1.pipe(retry(2)).subscribe( this.myObserver );
  }

 

}
