import promptSync from "prompt-sync";
import { Livro } from "./Livro.js";

const prompt = promptSync();

export function cadastrarLivro(listaLivros) {

    const titulo = prompt("Título: ").toUpperCase();
    const autor = prompt("Autor: ");
    const categoria = prompt("Categoria: ");
    const paginas = Number(prompt("Número de páginas: "));

    const novoLivro = new Livro(
        titulo,
        autor,
        categoria,
        paginas,
        true
    );

    listaLivros.push(novoLivro);

    console.log();
    console.log("Livro cadastrado com sucesso!");
    console.log();
}