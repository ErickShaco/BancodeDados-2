import TurmaModel from "../models/index.js";

class TurmaController {
  static async criar(cod_curso, nome_curso) {
    try {
      if (!cod_curso || !nome_curso) {
        return console.error("Todos os Campos Devem ser Preenchidos.");
      }
      const turma = await TurmaModel.criarTurma(cod_curso, nome_curso);
      console.log("Turma Criada com Sucesso");
      return turma;
    } catch (error) {
      console.error(error);
    }
  }

  static async editar(cod_curso, nome_curso) {
    try {
      if (!cod_curso || !nome_curso) {
        return console.error("Todos os Campos Devem ser Preenchidos.");
      }
      const turma = await TurmaModel.editarTurma(cod_curso, nome_curso);
      if (turma.length === 0) {
        return console.error("turma não Encontrada");
      }
      console.log("Turma Atualizada com Sucesso!");
    } catch (error) {
      console.log("Erro ao Atualizar Turma", error.message);
    }
  }

  static async deletarTurma(cod_curso) {
    try {
      const turma = TurmaModel.deletarTurma(cod_curso);
      if (turma.length === 0) {
        return console.error("Turma não encontrado.");
      }

      await TurmaModel.deletarTurma(cod_curso);
      console.log("Turma excluída com sucesso!");
    } catch (error) {
      console.log("Erro ao deletar Turma", error.message);
    }
  }

  static async deletarTodos() {
    try {
      await TurmaModel.deletarTodos();
      console.log("Turmas deletadas com sucesso!");
    } catch (error) {
      console.log("Erro ao deletar Turma", error.message);
    }
  }

  static async listarTodos() {
    try {
      const turmas = await TurmaModel.listarTodos();
      if (turmas.length === 0) {
        return console.log("Nenhuma Turma a ser exibido!");
      }
      console.log("Listagem de Turmas:");
      return turmas;
    } catch (error) {
      console.log("Erro ao listar Turmas", error.message);
    }
  }

  static async listarPorCod(cod_curso) {
    try {
      const turma = await TurmaModel.listarPorCod(cod_curso);
      if (turma.length === 0) {
        return console.error("Turma não encontrada!");
      }
      console.log("Turma: ");
      return turma;
    } catch (error) {
      console.log("Erro ao listar Turma", error.message);
    }
  }

  static async totalTurmas() {
    try {
      const total = await TurmaModel.totalTurmas();
      if (total.length === 0) {
        return console.error("Não há Turmas a serem exibidos.");
      }
      return total;
    } catch (error) {
      console.log("Erro ao encontrar Turmas", error.message);
    }
  }

  static async listarAlunosPorCurso(cod_curso) {
    try {
      const alunos = await TurmaModel.listarAlunosPorCurso(cod_curso);
      if (alunos.length === 0) {
        return console.error("Não há Alunos Alocados nenhuma Turma");
      }
      console.log("Alunos: ");

      return alunos;
    } catch (error) {
      console.log("Erro ao Listar Alunos!", error.message);
    }
  }

  static async totalAlunosPorCurso() {
    try {
      const alunos = await TurmaModel.totalALunosPorCurso();
      if (alunos.length === 0) {
        return console.error("Não Existe Alunos para serem Contados!");
      }
      console.log("Alunos: ");

      return alunos;
    } catch (error) {
      console.log("Erro Ao Contar Alunos!", error.message);
    }
  }

  static async listarProfessoresPorCurso() {
    try {
      const professores = await TurmaModel.listarProfessoresPorCurso();
      if (professores.length === 0) {
        return console.error("Não há Professores para serem listados!");
      }
      console.log("Professores: ");

      return professores;
    } catch (error) {
      console.log("Erro ao Listar Professores!", error.message);
    }
  }
}

export default TurmaController;
