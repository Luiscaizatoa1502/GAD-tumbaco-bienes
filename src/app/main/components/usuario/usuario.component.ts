import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioDTO } from '../../Dto/Usuario.dto';
import { UsuarioModel, UpdateUsuarioDTO } from '../../entities/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  UsuarioForm: FormGroup;
  listadousuario: UsuarioModel[] = []; //poner
  selectUsuario:UpdateUsuarioDTO={}; //

  constructor(private usuarioService: UsuarioService, private form: FormBuilder) {
    {
      this.UsuarioForm = this.form.group({
        
        responsable_bien: ['', Validators.required],
        nombre_bien: ['', Validators.required],
        marca: ['', Validators.required],
        serie: ['', Validators.required],
        detalle: ['', Validators.required],
        stock: ['', Validators.required],
        disponibilidad: ['', Validators.required],
      })
    }


  }

    ngOnInit(): void {
      this.getUser();
     
    }

    

    getUser() {
      this.usuarioService.getUsuario().subscribe(data => {
        this.listadousuario = data;
        console.log(this.listadousuario)
      });
    }
    
    agregarUsuario() {
      let usuario: UsuarioModel = this.UsuarioForm.value
      this.usuarioService.crearUsuario(usuario).subscribe(data => {
        this.getUser();
        console.log(usuario)
      })
    }
   

    updateUsuario(): void {
      const id = this.selectUsuario.id_usuarios ?? 0;
     
       const data: UsuarioDTO = {
        responsable_bien: this.UsuarioForm.get('responsable_bien')?.value,
        nombre_bien: this.UsuarioForm.get('nombre_bien')?.value,
        marca: this.UsuarioForm.get('marca')?.value,
        serie: this.UsuarioForm.get('serie')?.value,
        detalle: this.UsuarioForm.get('detalle')?.value,
        stock: this.UsuarioForm.get('stock')?.value,
        disponibilidad: this.UsuarioForm.get('disponibilidad')?.value,
      }; 
    
      this.usuarioService.updateUsuario(id, data).subscribe((response) => {
        console.log(response);
        this.getUser();
      });
    }
    
    
    
  

    editusuario(lista:UsuarioModel){
      console.log('Datos recibidos para editar:', lista);
      this.selectUsuario = lista;
      
    }

    eliminarUsuario(id_usuarios: number):void {
      Swal.fire({
        title: '¿Está seguro?',
        text: 'No podrá revertir esta acción',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.usuarioService.eliminarUsuario(id_usuarios).subscribe(data => {
            if (data && data) {
              this.listadousuario = data;
            }
            this.getUser();
          })
          Swal.fire(
            'Eliminado',
            'El usuario ha sido eliminado',
            'success'
          )
        }
      }
      )

      

    

    } 

    getEventValue(event: any): string {
      return event.target.value;
    }

   

}
