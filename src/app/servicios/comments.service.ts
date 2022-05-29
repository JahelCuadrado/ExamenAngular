import { Comentario } from './../model/comentario';
import { AppEndPoints } from './../endpoints.component';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http"
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class CommentService{

  

  constructor(private http: HttpClient) {}

  obtenerComentarios(): Observable<Array<Comentario>>{
    return this.http.get<Array<Comentario>>(AppEndPoints.ENDPOINTCOMENTARIOS);
  }


    }
