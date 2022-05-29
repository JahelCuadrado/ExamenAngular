import { CommentService } from './../../servicios/comments.service';
import { Comentario } from './../../model/comentario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

    //Form
    public registroForm: FormGroup;

    //Booleana
    public submitted = false

    //Booleana
    public comentario = new Comentario();

    constructor(private formBuilder: FormBuilder, private commentService: CommentService) {

      this.registroForm = this.formBuilder.group({
        id: ['', [Validators.required]],
        nombre: ['', Validators.required],
        body: ['', Validators.required],
        email:['', [Validators.required, Validators.email]]
      });
  }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.submitted=true

    if(this.registroForm.invalid){
      return
    }

    this.comentario.postId = 2;
    this.comentario.id = this.registroForm.value.id;
    this.comentario.name = this.registroForm.value.name;
    this.comentario.email = this.registroForm.value.email;
    this.comentario.body = this.registroForm.value.body;

    this.commentService.nuevoComentario(this.comentario);

  }


  get f() {
    return this.registroForm.controls;
  }

}
