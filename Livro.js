export class Livro {
    titulo;
    autor;
    categoria;
    paginas;
    disponivel;

    constructor (titulo, autor, categoria, paginas, disponivel){
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.paginas = paginas;
        this.disponivel = disponivel;
    }
}