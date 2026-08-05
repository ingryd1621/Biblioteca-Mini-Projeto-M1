export function exibirEstatisticas(listaLivros) {
    
    let disponiveis = 0;
    let indisponiveis = 0;
    let totalPaginas = 0;
    const totalLivros = listaLivros.length;

    listaLivros.forEach(livro => {
        if (livro.disponivel) {
            disponiveis++;
        } else {
            indisponiveis++;
        };
    totalPaginas += livro.paginas;
    });

    const mediaPaginas = totalPaginas / totalLivros;
    console.log();
    console.log("===== ESTATÍSTICAS =====");
    console.log();
    console.log(`Total de livros cadastrados: ${totalLivros} livros.`);
    console.log();
    console.log(`Quantidade de livros disponíveis: ${disponiveis} livros.`);
    console.log();
    console.log(`Quantidade de livros indisponíveis: ${indisponiveis} livros.`);
    console.log();
    console.log(`Total de páginas considerando todos os livros: ${totalPaginas} páginas.`);
    console.log();
    console.log(`Média de páginas por livro: ${mediaPaginas.toFixed(2)} páginas.`);
    console.log();

}