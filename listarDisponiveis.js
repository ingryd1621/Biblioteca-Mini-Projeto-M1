export function listarDisponiveis(listaLivros) {
    console.log();
    console.log("======= LIVROS DISPONÍVEIS =======");
    console.log();

    const livrosDisponiveis = listaLivros.filter(livro => livro.disponivel === true);

    livrosDisponiveis.forEach(livro => {
        console.log(
            `Título: ${livro.titulo.toUpperCase()}
            Autor: ${livro.autor}
            Categoria: ${livro.categoria}
            Páginas: ${livro.paginas}
            Status: ${livro.disponivel ? "Disponível" : "Emprestado"}`);
            console.log();
    });
}
