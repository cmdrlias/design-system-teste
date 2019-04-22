import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';

const routes: Routes = [
  { path: '', component: TesteComponent },
  { path: 'beneficios', component: BeneficiosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
