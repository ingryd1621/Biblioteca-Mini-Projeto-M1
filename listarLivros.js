export function listarLivros(listaLivros) {
  console.log();
  console.log("========= LISTA DE LIVROS ========");
  console.log();

  listaLivros.forEach((livro) => {
    console.log(
        `Título: ${livro.titulo.toUpperCase()}
        Autor: ${livro.autor}
        Categoria: ${livro.categoria}
        Páginas: ${livro.paginas}
        Status: ${livro.disponivel ? "Disponível" : "Emprestado"}`);
        console.log();
  });
}