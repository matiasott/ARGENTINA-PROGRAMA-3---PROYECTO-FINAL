import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperiecniaComponent } from './componentes/experiencia/new-experiecnia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component:NewExperiecniaComponent},
  {path:'editexp/:id',component:EditExperienciaComponent},
  {path:'nuevaedu',component:NeweducacionComponent},
  {path:'editedu/:id',component:EditEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
