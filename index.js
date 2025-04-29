import AlunoView from "./src/modules/aluno/views/index.js";
import TurmaView from "./src/modules/curso/views/index.js";
import PromptSync from "prompt-sync";
import CriarTabelas from "./src/config/criar_tabela.js";
import ProfessorView from "./src/modules/professor/views/index.js";

const input = PromptSync();

async function menuPrincipal() {
  console.log(`Menu Principal`);
  console.log(`1 - Menu Aluno`);
  console.log(`2 - Menu Professor`);
  console.log(`3 - Menu Curso`);
  console.log(`0 - Sair do Sistema`);
  const opcao = input(`Escolha a opção Desejada: `);
  switch (opcao) {
    case "1":
      menuAluno();
      break;
    case "2":
      menuProfessor();
      break;
    case "3":
        menuCurso()
      break;
    case "0":
      console.log(`Saindo....`);
      break;
  }
}

async function menuAluno() {
  console.log(`Menu Aluno`);
  console.log(`1 - Criar Aluno`);
  console.log(`2 - Editar Aluno`);
  console.log(`3 - Listar Todos os Alunos`);
  console.log(`4 - Listar Aluno por Email`);
  console.log(`5 - Deletar Todos os Alunos `);
  console.log(`6 - Deletar os Alunos por Email `);
  console.log(`7 - Total de Alunos `);
  console.log(`0 - Retornar Ao Menu Principal `);
  const opcao = input(`Escolha a opção Desejada: `);
  switch (opcao) {
    case "1":
      AlunoView.criar();
      break;
    case "2":
      AlunoView.editar();
      break;
    case "3":
      AlunoView.listarTodos();
      break;
    case "4":
      AlunoView.listarPorEmail();
      break;
    case "5":
      AlunoView.deletarTodos();
      break;
    case "6":
      AlunoView.deletarAluno();
      break;
    case "7":
      AlunoView.totalAlunos();
      break;
    case "0":
      console.log(`Retornando....`);
      menuPrincipal();
      break;
  }
}

async function menuProfessor() {
  console.log(`Menu Professor`);
  console.log(`1 - Criar Professor`);
  console.log(`2 - Editar Professor`);
  console.log(`3 - Listar Todos os Professores`);
  console.log(`4 - Listar Professor por Matricula`);
  console.log(`5 - Deletar Todos os Professores `);
  console.log(`6 - Deletar os Professores por Matricula `);
  console.log(`7 - Total de Professores `);
  console.log(`0 - Retornar Ao Menu Principal `);
  const opcao = input(`Escolha a opção Desejada: `);
  switch (opcao) {
    case "1":
      ProfessorView.criar();
      break;
    case "2":
      ProfessorView.editar();
      break;
    case "3":
      ProfessorView.listarTodos();
      break;
    case "4":
      ProfessorView.listarPorMatricula();
      break;
    case "5":
      ProfessorView.deletarTodos();
      break;
    case "6":
      ProfessorView.deletarProfessor();
      break;
    case "7":
      ProfessorView.totalProfessor();
      break;
    case "0":
      console.log(`Retornando....`);
      menuPrincipal();
      break;
  }
}

async function menuCurso() {
    console.log(`Menu Curso`);
    console.log(`1 - Criar Curso`);
    console.log(`2 - Editar Curso`);
    console.log(`3 - Listar Todos os Cursos`);
    console.log(`4 - Listar por Codigo de Curso`);
    console.log(`5 - Deletar Todos`);
    console.log(`6 - Deletar Curso`);
    console.log(`7 - Total de Cursos`);
    console.log(`8 - Listar os Alunos por Curso`);
    console.log(`9 - Total de Alunos por Curso`);
    console.log(`10 - Listar Professores por Curso `);
    console.log(`0 - Sair do Sistema`);
    const opcao = input(`Escolha a opção Desejada: `);
    switch (opcao) {
      case "1":
        TurmaView.criarTurma();
        break;
      case "2":
        TurmaView.editarTurma();
        break;
      case "3":
        TurmaView.listarTodos()
        break;
      case "4":
        TurmaView.listarPorCod()
        break;
      case "5":
        TurmaView.deletarTodos()
        break;
      case "6":
        TurmaView.deletarTurma()
        break;
      case "7":
        TurmaView.totalTurmas()
        break;
      case "8":
        TurmaView.listarAlunosPorCurso()
        break;
      case "9":
        TurmaView.totalAlunosPorCurso()
        break;
      case "10":
        TurmaView.listarProfessoresPorCurso()
        break;
      case "0":
        console.log(`Retornando....`);
        menuPrincipal()
        break;
    }
  }

menuPrincipal();
