export class UsuarioDTO {
    id_usuarios?: number;
    responsable_bien: string;
    nombre_bien: string;
    marca: string;
    serie: string;
    detalle: string;
    stock: string;
    disponibilidad: string;
  
    constructor(data: UsuarioDTO) {
      this.id_usuarios = data.id_usuarios;
      this.responsable_bien = data.responsable_bien;
      this.nombre_bien = data.nombre_bien;
      this.marca = data.marca;
      this.serie = data.serie;
      this.detalle = data.detalle;
      this.stock = data.stock;
      this.disponibilidad = data.disponibilidad;
    }
  }