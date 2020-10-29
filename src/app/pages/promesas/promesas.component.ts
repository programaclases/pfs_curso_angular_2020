import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*  this.primerafuncion();
     this.segundafuncion();
     this.tercerafuncion(); */
   /*  this.primerafuncion().then(resp1 => {
      console.log('resp1', resp1);

    }).then(() => {
      this.segundafuncion().then(resp2 => {
        console.log('resp2', resp2);
      }).then( () => {
        this.tercerafuncion().then( resp3 => {
          console.log('resp3', resp3);
        });
      });
    }).catch( error => {
      console.log('error', error);

    }) ; */

    this.recogerPromesas();
  }

  async recogerPromesas(): Promise<void> {
    console.log('dentro de recoger promesas');
    let resp1 = await this.primerafuncion();
    console.log('resp1 ', resp1);
    console.log(await this.segundafuncion() );
    console.log( await this.tercerafuncion() );


  }

  primerafuncion(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve('primera función');
        // reject('no se puede ejecutar');
      }, 1000);
    });
  }

  segundafuncion(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve('segunda función');
      }, 1000);
    });
  }


  tercerafuncion(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve('tercera función');
      }, 1000);
    });
  }

}
