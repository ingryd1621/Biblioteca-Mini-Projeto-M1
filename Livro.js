export class Livro {
    titulo;
    autor;
    categoria;
    paginas;
    disponivel;

    constructor (titulo_parametro, autor_parametro, categoria_parametro, paginas_parametro, disponivel_parametro){
        this.titulo = titulo_parametro;
        this.autor = autor_parametro;
        this.categoria = categoria_parametro;
        this.paginas = paginas_parametro;
        this.disponivel = disponivel_parametro;
    }
}