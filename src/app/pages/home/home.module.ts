import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeComponent   //declaramos el componente
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule ],
    exports: [
        HomeComponent  //declaramos el componente.
    ],
    providers: [],
})
export class HomeModule {}
