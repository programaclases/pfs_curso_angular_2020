import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {

  public userForm: FormGroup;
  public update = false;
  public id: string = '';

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private userService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      nombre: new FormControl(''),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl(''),
    });
    this.route.params.subscribe((parametros: any) => {
      if (parametros.id == null) {

      } else {
        this.update = true;
        this.id = parametros.id;
        this.userForm.addControl('id', new FormControl(this.id));
        this.userForm.removeControl('password');
        this.userService.getUser(this.id).toPromise()
          .then(user => {
            console.log('user', user);

          /*  para actualizar variables;  
            this.userForm.get('email').setValue('');
            this.userForm.get('email').patcValue('');
           */
            this.userForm.patchValue({
              nombre: user.message.nombre,
              email: user.message.email,
              role: user.message.role,
            });
          });

      }
    });
  }


  onSubmit(): void {
    if (this.update) {
      this.userService.updateUser( this.userForm.value ).toPromise()
      .then( userCreate => {
        console.log('update', userCreate);
       /*  setTimeout( () => {
          this.router.navigate(['usuario/list']);
        }, 2000); */

      }).catch( error => {
        console.log('error', error);
      });
    } else {
        this.userService.createUser( this.userForm.value ).toPromise()
        .then( userCreate => {
          console.log('userCreate', userCreate);
         /*  setTimeout( () => {
            this.router.navigate(['usuario/list']);
          }, 2000); */

        }).catch( error => {
          console.log('error', error);
        });
    }
  }

}
