import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [
    CommonModule,
    MenuModule
  
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
   
  ]
})
export class LayoutModule { }
