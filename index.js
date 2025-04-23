import AlunoView from "./src/modules/aluno/views/index.js";
import TurmaView from "./src/modules/curso/views/index.js"
import ProfessorView from "./src/modules/professor/views/index.js";
import PromptSync from "prompt-sync";
import CriarTabelas from "./src/config/criar_tabela.js";

const input = PromptSync()

// CriarTabelas();

// const nome = input('Digite o nome do aluno: ');
// const email = input('Digite o e-mail do aluno: ');
// const matricula = input('Digite o matrícula do aluno: ');
// const telefone = input('Digite o telefone do aluno: ');
// const cod_turma = input('Digite o código do aluno: ');

// AlunoView.criar()

// AlunoView.editar()

// AlunoView.listarTodos();

// AlunoView.totalAlunos();

// AlunoView.deletarTodos();

TurmaView.criarTurma()

// TurmaView.editarTurma()

// TurmaView.listarPorCod()

// TurmaView.listarTodos()

// ProfessorView.criar()