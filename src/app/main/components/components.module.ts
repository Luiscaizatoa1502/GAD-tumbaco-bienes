import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { PrimengModule } from '../../primeng/primeng.module';
import { MensajeComponent } from './mensaje/mensaje.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule
  ],
  declarations: [UsuarioComponent,TarjetaComponent,MensajeComponent,DepartamentoComponent, LoginComponent],

}

)
export class ComponentsModule { }
