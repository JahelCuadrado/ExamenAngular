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

    constructor(private formBuilder: FormBuilder) {

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

  }


  get f() {
    return this.registroForm.controls;
  }

}
