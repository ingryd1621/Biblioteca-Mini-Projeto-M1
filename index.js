import { dadosLivros } from "./dadosLivros.js";
import { Livro } from "./Livro.js";
import { listarLivros } from "./listarLivros.js";
import { realizarEmprestimo } from "./realizarEmprestimo.js";
import promptSync from "prompt-sync";

const listaLivros = dadosLivros.map(
  item => new Livro(item.titulo, item.autor, item.categoria, item.paginas, item.disponivel)
);

//console.log(listaLivros);

const prompt = promptSync();
let opcao;

do {
  console.log("==================================");
  console.log("SISTEMA DE BIBLIOTECA");
  console.log("==================================");
  console.log("1 - Listar livros");
  console.log("2 - Buscar livro");
  console.log("3 - Listar livros disponíveis");
  console.log("4 - Cadastrar livro");
  console.log("5 - Realizar empréstimo");
  console.log("6 - Realizar devolução");
  console.log("7 - Exibir estatísticas");
  console.log("0 - Sair");

  opcao = Number(prompt("Escolha uma opção: "));

  switch (opcao) {
    case 1:
      listarLivros(listaLivros);
      console.log();
      break;
    case 2:
      console.log("opção 2");
      console.log();
      break;
    case 3:
      console.log("opção 3");
      console.log();
      break;
    case 4:
      console.log("opção 4");
      console.log();
      break;
    case 5:
      const titulo = prompt("Digite o título do livro: ");
      realizarEmprestimo(listaLivros, titulo);
      break;
      console.log();
      break;
    case 6:
      console.log("opção 6");
      console.log();
      break;
    case 7:
      console.log("Opção 7");
      console.log();
      break;
    case 0:
      console.log("Saindo do sistema... Até logo!");
      break;
    default:
      console.log("Opção inválida! Tente novamente.");
      console.log();
      break;
  }

} while (opcao !== 0);