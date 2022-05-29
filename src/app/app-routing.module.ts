import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'   //le estamos diciendo que cualquier ruta que no encuentre la direccione a login mediante una ruta directa
  },
  {
    path: 'home',
    component: HomeComponent   //Y aquí le decimos que login se refiere al componente login
  },
  {
    path: 'formulario',
    component: FormularioComponent   //Y aquí le decimos que registro se refiere al componente registro
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
