import { dadosLivros } from "./dadosLivros.js";
import { Livro } from "./Livro.js";
import { listarLivros } from "./listarLivros.js";
import { realizarEmprestimo } from "./realizarEmprestimo.js";
import { realizarDevolucao } from "./realizarDevolucao.js";
import { buscarLivro } from "./buscarLivro.js";
import { listarDisponiveis } from "./listarDisponiveis.js";
import { cadastrarLivro } from "./cadastrarLivro.js";
import { exibirEstatisticas} from "./exibirEstatisticas.js";
import promptSync from "prompt-sync";

const listaLivros = dadosLivros.map(
  item => new Livro(item.titulo, item.autor, item.categoria, item.paginas, item.disponivel)
);

//console.log(listaLivros);

const prompt = promptSync();
let opcao;

do {
  console.log("==================================");
  console.log("       SISTEMA DE BIBLIOTECA      ");
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
      const tituloBusca = prompt("Digite o título do livro: ");
      buscarLivro(listaLivros, tituloBusca);
      console.log();
      break;
    case 3:
      listarDisponiveis(listaLivros);
      console.log();
      break;
    case 4:
      cadastrarLivro(listaLivros);
      console.log();
      break;
    case 5:
      const titulo = prompt("Digite o título do livro: ");
      realizarEmprestimo(listaLivros, titulo);
      break;
      console.log();
      break;
    case 6:
      const tituloDevolvido = prompt("Digite o título do livro: ");
      realizarDevolucao(listaLivros, tituloDevolvido);
      console.log();
      break;
    case 7:
      exibirEstatisticas(listaLivros);
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