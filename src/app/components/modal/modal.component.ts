import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare const $: any;
declare const Jquery: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() id: string = '';
  @Output() enviarLogin = new EventEmitter();
  @Output() enviarId = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  abrirModal() {
    console.log('debería abrirse el modal');
    $('#myModal').modal('show');
    $('#myInput').trigger('focus');

  }

  cerrarModal( value: boolean ) {

    this.enviarLogin.emit( value );
    this.enviarId.emit( this.id );
    $('#myModal').modal('hide');
  }
}
