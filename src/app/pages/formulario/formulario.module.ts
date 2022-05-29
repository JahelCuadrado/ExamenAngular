import { FormularioComponent } from './formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FormularioComponent   //declaramos el componente
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
     ],
    exports: [
        FormularioComponent  //declaramos el componente.
    ],
    providers: [],
})
export class FormularioModule {}
