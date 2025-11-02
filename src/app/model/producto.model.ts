export interface producto {
    id: number;
    nombre: string;
    descripcion: string;
    color: string;
    precio: number;
    imagen: string;
    disponible: boolean;
    cantidad?: number;
    categoria?: string;
    marca?: string;
    oferta?: boolean;
    descBool?: boolean;
}