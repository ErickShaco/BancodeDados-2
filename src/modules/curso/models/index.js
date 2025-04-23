import client from "../../../config/database.js";

class TurmaModel{
    static async criarTurma(cod_curso, nome_curso){
        const dados = [cod_curso, nome_curso]
        const consulta = `insert into turma(cod_curso, nome_curso)
        values ($1, $2) returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async editarTurma(cod_curso, nome_curso){
        const dados = [cod_curso, nome_curso]
        const consulta = `update turma set nome_curso = $2 where cod_curso = $1 returning *;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }

    static async deletarTurma(cod_curso){
        const dados = [cod_curso]
        const consulta = `delete from turma where cod_curso = $1`
        await client.query(consulta, dados);
    }

    static async deletarTodos(){
        const consulta = `delete from turma;`
        await client.query(consulta);
    }

    static async listarTodos(){
        const consulta = `select * from turma;`
        const resultado = await client.query(consulta)
        return resultado.rows;
    }

    static async listarPorCod(cod_curso){
        const dados = [cod_curso]
        const consulta = `select * from turma where cod_curso = $1`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }


    static async totalTurmas(){
        const consulta = `select count(cod_curso) as total from turma;`
        const resultado = await client.query(consulta);
        return resultado.rows;
    }


}

export default TurmaModel;