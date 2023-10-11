import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './menu/layout/layout.module';
import { ComponentsModule } from './main/components/components.module';
import { LoginprincipalComponent } from './loginInicio/loginprincipal/loginprincipal.component';
import { HttpClientModule } from  '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    LoginprincipalComponent,
    
  
  ],
  imports: [
    AppRoutingModule,
    LayoutModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
