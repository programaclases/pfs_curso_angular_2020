import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare const $: any;
declare const Jquery: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() id: string = '';
  @Input() clase_button: string = 'btn btn-primary';
  @Output() enviarLogin = new EventEmitter();
  @Output() enviarId = new EventEmitter();

  public closeModal = false;

  constructor() {}

  ngOnInit(): void {}

  abrirModal() {
    this.closeModal = false;
    this.closeModal = true;
    setTimeout(() => {
      console.log('debería abrirse el modal');
      $('#myModal').modal('show');
      $('#myInput').trigger('focus');
    }, 500);
  }

  cerrarModal(value: boolean) {
    this.enviarLogin.emit(value);
    this.enviarId.emit(this.id);
    $('#myModal').modal('hide');
  }
}
