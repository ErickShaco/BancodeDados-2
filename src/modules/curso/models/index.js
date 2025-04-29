import client from "../../../config/database.js";

class TurmaModel {
  static async criarTurma(cod_curso, nome_curso) {
    const dados = [cod_curso, nome_curso];
    const consulta = `insert into curso(cod_curso, nome_curso)
        values ($1, $2) returning *;`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async editarTurma(cod_curso, nome_curso) {
    const dados = [cod_curso, nome_curso];
    const consulta = `update curso set nome_curso = $2 where cod_curso = $1 returning *;`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async deletarTurma(cod_curso) {
    const dados = [cod_curso];
    const consulta = `delete from curso where cod_curso = $1`;
    await client.query(consulta, dados);
  }

  static async deletarTodos() {
    const consulta = `delete from curso;`;
    await client.query(consulta);
  }

  static async listarTodos() {
    const consulta = `select * from curso;`;
    const resultado = await client.query(consulta);
    return resultado.rows;
  }

  static async listarPorCod(cod_curso) {
    const dados = [cod_curso];
    const consulta = `select * from curso where cod_curso = $1`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async totalTurmas() {
    const consulta = `select count(cod_curso) as total from curso;`;
    const resultado = await client.query(consulta);
    return resultado.rows;
  }

  static async totalALunosPorCurso(cod_curso) {
    const dados = [cod_curso];
    const consulta = `select count(aluno.cod_curso) as total_aluno_curso from curso
        join aluno on curso.cod_curso = aluno.cod_curso
        where aluno.cod_curso = $1;`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async listarAlunosPorCurso(cod_curso) {
    const dados = [cod_curso];
    const consulta = `select aluno.nome, curso.nome_curso from curso
        join aluno on curso.cod_curso = aluno.cod_curso
        where aluno.cod_curso = $1;`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }

  static async listarProfessoresPorCurso(cod_curso){
    const dados = [cod_curso];
    const consulta = `select professor.nome, curso.nome_curso from curso
        join professor on curso.cod_curso = professor.cod_curso
        where professor.cod_curso = $1;`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;

  }
}

export default TurmaModel;
