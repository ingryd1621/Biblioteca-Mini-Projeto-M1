export function listarLivros(listaLivros) {
  console.log("====== LISTA DE LIVROS =====");

  listaLivros.forEach((livro, indice) => {
    console.log(
        `Título: ${livro.titulo}
        Autor: ${livro.autor}
        Categoria: ${livro.categoria}
        Páginas: ${livro.paginas}
        Status: ${livro.disponivel ? "Disponível" : "Emprestado"}`
    );
  });
}