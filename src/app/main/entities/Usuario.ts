

export interface UsuarioModel {
    id_usuarios: number;
    responsable_bien: string;
    nombre_bien: string;
    marca: string;
    serie: string;
    detalle: string;
    stock: string;
    disponibilidad: string;
}


export interface UpdateUsuarioDTO extends Partial<UsuarioModel> {

}
