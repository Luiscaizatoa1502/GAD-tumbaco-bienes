import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent } from './main/components/tarjeta/tarjeta.component';
import { MensajeComponent } from './main/components/mensaje/mensaje.component';
import { UsuarioComponent } from './main/components/usuario/usuario.component';
import { DepartamentoComponent } from './main/components/departamento/departamento.component';
import { LoginComponent } from './main/components/login/login.component';
import { LoginprincipalComponent } from './loginInicio/loginprincipal/loginprincipal.component';




const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'tarjeta', component: TarjetaComponent },
  { path: 'mensajes', component: MensajeComponent},
  {path:'user',component:UsuarioComponent},
  {path:'departamento',component: DepartamentoComponent},
  {path:'login',component: LoginComponent},

 

  
  /* {path:'loginPrincipal',component: LoginprincipalComponent}, */
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule, CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
