export function realizarDevolucao(listaLivros, tituloDevolvido) {

    const livro = listaLivros.find(livro => livro.titulo.toLowerCase() === tituloDevolvido.toLowerCase());

    if (livro) {
        livro.disponivel = true;
        console.log();
        console.log("Livro devolvido com sucesso!");
        console.log();
    } else {
        console.log();
        console.log("Livro não encontrado!");
        console.log();
    }

}