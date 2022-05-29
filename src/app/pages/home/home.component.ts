import { CommentService } from './../../servicios/comments.service';
import { Comentario } from './../../model/comentario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public comentarios: Array<Comentario> = [];

  constructor(private commentsService: CommentService) { }

  ngOnInit(): void {
  }

  recuperarOfertas():void{
    this.commentsService.obtenerComentarios().subscribe( respuesta => {
      this.comentarios = respuesta;
      console.log('Ofertas recuperadas ==>' + JSON.stringify(this.comentarios));
    });
  }

}
