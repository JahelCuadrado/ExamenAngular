import { FormularioComponent } from './formulario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FormularioComponent   //declaramos el componente
    ],
    imports: [ CommonModule ],
    exports: [
        FormularioComponent  //declaramos el componente.
    ],
    providers: [],
})
export class FormularioModule {}
