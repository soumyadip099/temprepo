import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { HttpHeaders} from '@angular/common/http';
import { Model} from './model';
@Injectable({
  providedIn: 'root'
})
export class CserviceService {

  private mailApi='https://mailthis.to/codeninja'
  constructor( private http: HttpClient) { }
  PostMessage(input: any){
    return this.http.post(this.mailApi, input, {responseType: 'text'}).pipe(
      map(
        (Response)=>{
          if(Response){
            return Response;
          }
        },
        (error: any)=>{
          return error;
        }
      )
    )
  }
}
