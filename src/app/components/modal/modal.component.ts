import { Component, OnInit } from '@angular/core';

declare const $: any;
declare const Jquery: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  abrirModal() {
    console.log('debería abrirse el modal');
    $('#myModal').modal('show');
    $('#myInput').trigger('focus');

  }
}
