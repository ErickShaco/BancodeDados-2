import TurmaController from "../controllers/index.js";
import prompt from "prompt-sync";
import TurmaModel from "../models/index.js";

const input = prompt();

class TurmaView {
  static async criarTurma() {
    const cod_curso = input(`Digite o Codigo da Turma: `);
    const nome_curso = input(`Digite o Nome da Turma: `);

    const turma = await TurmaController.criar(cod_curso, nome_curso);
    console.table(turma);
  }

  static async editarTurma() {
    const cod_curso = input(`Digite o Codigo da Turma: `);
    const nome_curso = input(`Digite o Nome da Turma: `);

    const turma = await TurmaController.editar(cod_curso, nome_curso);
    console.table(turma);
  }

  static async listarTodos() {
    const turma = await TurmaController.listarTodos();
    console.table(turma);
  }

  static async listarPorCod() {
    const cod_curso = input(`Digite o Codigo da Turma: `);

    const turma = await TurmaController.listarPorCod(cod_curso);
    console.table(turma);
  }

  static async deletarTodos() {
    await TurmaController.deletarTodos();
  }

  static async deletarTurma() {
    const cod = input(`Digite o Codigo da Turma: `);

    const turma = await TurmaController.deletarTurma(cod_curso);
    console.table(turma);
  }

  static async totaTurmas() {
    const total = await TurmaController.totalTurmas();
    console.table(total);
  }

  static async listarAlunosPorCurso() {
    const curso = input(`Informe o Codigo do Curso: `)
    const alunos = await TurmaController.listarAlunosPorCurso(curso);
    console.table(alunos);
  }

  static async totalAlunosPorCurso() {
    const alunos = await TurmaController.totalAlunosPorCurso();
    console.table(alunos);
  }

  static async listarProfessoresPorCurso() {
    const curso = input(`Informe o Codigo do Curso: `)
    const professores = await TurmaController.listarProfessoresPorCurso(curso);
    console.table(professores);
  }
}

export default TurmaView;
