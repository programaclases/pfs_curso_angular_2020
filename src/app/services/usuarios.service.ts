import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { url_pfs } from '../config/direcciones';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public myUrl = url_pfs;
  constructor(
    private http: HttpClient
  ) { }

  listUsers(): Observable<any> {
    const otraUrl = this.myUrl + 'users/list';
    return this.http.get( otraUrl ).pipe( map( (resp: any) => {
    return  resp.usuarios;
    } ));
  }

  getUser(id): Observable<any> {
    const otraUrl = this.myUrl + 'users/usuario/' +id ;
    return this.http.get( otraUrl );
  }

  createUser( user ): Observable<any> {
    const otraUrl = this.myUrl + 'users/crear/';
    return this.http.post( otraUrl , user );
  }
  updateUser( user: any ): Observable<any> {
    const otraUrl = this.myUrl + 'users/update/' + user.id;
    return this.http.put( otraUrl , user );
  }

  deleteUsers( id: string ): Observable<any> {
    const otraUrl = this.myUrl + 'users/delete/' + id;
    return this.http.delete( otraUrl );
  }

}
