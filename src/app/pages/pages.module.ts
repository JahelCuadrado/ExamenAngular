import { FormularioModule } from './formulario/formulario.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
  ],
    imports: [
      HomeModule,
      FormularioModule
    ],
    exports: [
      HomeModule,
      FormularioModule
    ],
    providers: [],
})
export class PagesModule {}
