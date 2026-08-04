export function realizarDevolucao(listaLivros, tituloDevolvido) {

    const livro = listaLivros.find(livro => livro.titulo.toLowerCase() === tituloDevolvido.toLowerCase());

    if (livro) {
        livro.disponivel = true;
        console.log("Livro devolvido com sucesso!");
    } else {
        console.log("Livro não encontrado!");
    }

}