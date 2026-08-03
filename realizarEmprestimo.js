export function realizarEmprestimo(listaLivros, titulo) {

    const livro = listaLivros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());

    if (livro && livro.disponivel) {
        livro.disponivel = false;
        console.log("Livro emprestado com sucesso!");
    } else {
        console.log("Livro indisponível!");
    };
}