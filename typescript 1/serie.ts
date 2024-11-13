export class Serie {
    id: number;
    titulo: string;
    plataforma: string;
    numeroTemporadas: number;
    descripcion: string;
    link: string;
    imagen: string;

    constructor(
        id: number,
        titulo: string,
        plataforma: string,
        numeroTemporadas: number,
        descripcion: string,
        link: string,
        imagen: string
    ) {
        this.id = id;
        this.titulo = titulo;
        this.plataforma = plataforma;
        this.numeroTemporadas = numeroTemporadas;
        this.descripcion = descripcion;
        this.link = link;
        this.imagen = imagen;
    }
}
