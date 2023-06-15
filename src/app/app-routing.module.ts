import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './components/crear/crear.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'crear',
    pathMatch: 'full'
  },
  {
    path:'crear', 
    component: CrearComponent
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
