export function buscarLivro(listaLivros, tituloBusca) {

    const livroEncontrado = listaLivros.find(livro => livro.titulo.toLowerCase() === tituloBusca.toLowerCase());

    if (livroEncontrado) {
        console.log();
        console.log("Livro encontrado!");
        console.log();
        console.log(`Título: ${livroEncontrado.titulo.toUpperCase()}`);
        console.log(`Autor: ${livroEncontrado.autor}`);
        console.log(`Categoria: ${livroEncontrado.categoria}`);
        console.log(`Número de páginas: ${livroEncontrado.paginas}`);
        console.log(`Status: ${livroEncontrado.disponivel ? "Disponível" : "Emprestado"}`);
        console.log();
    } else {
        console.log();
        console.log("Livro não encontrado.");
        console.log();
    }

}