import { Produto } from './produto.model'

import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class ListarService {
    constructor (private http: Http){}

    produtos(): Observable<Array<Produto>>{
      return this.http.get('http://localhost:3000/produtos').map(_ => _.json())
    }
}
