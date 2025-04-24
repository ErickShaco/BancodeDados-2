import AlunoModel from "../models/index.js";

class AlunoController{
    static async criar(nome, email, matricula, telefone, cod_curso){
        try {
            if(!nome || !email || !matricula || !telefone){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const aluno = await AlunoModel.criar(nome, email, matricula, telefone, cod_curso);
            console.log('Aluno criado com sucesso!');
            return aluno;

        } catch (error) {
            console.error(error);
        }
    }

    static async editar(nome, email, matricula, telefone, cod_curso){
        try {
            if(!nome || !email || !matricula || !telefone){
                return console.error('Todos os campos devem ser preenchidos.');
            }
            const aluno = await AlunoModel.atualizarAluno(nome, email, matricula, telefone, cod_curso);
            if(aluno.length === 0){
                return console.error('Aluno não encontrado.');
            }

            console.log('Aluno atualizado com sucesso!');
            return aluno;

        } catch (error) {
            console.log('Erro ao atualizar aluno', error.message);
        }
    }

    static async deletarAluno(email){
        try {
            const aluno = AlunoModel.listarPorEmail(email);
            if(aluno.length === 0){
                return console.error('Aluno não encontrado.');
            }

            await AlunoModel.deletarAluno(email);
            console.log('Aluno excluído com sucesso!');

            }
            catch (error) {
                console.log('Erro ao deletar aluno', error.message);
            }
        }
        
        static async deletarTodos(){
            try {
                await AlunoModel.deletarTodos();
                console.log('Alunos deletados com sucesso!');
            } catch (error) {
                console.log('Erro ao deletar aluno', error.message);
            }
        }

        static async listarTodos(){
            try {
                const alunos = await AlunoModel.listarTodos();
                if(alunos.length === 0){
                    return console.log('Nenhum usuário a ser exibido!');
                }
                console.log('Listagem de alunos:');
                return alunos;
            } catch (error) {
                console.log('Erro ao listar alunos', error.message);
            }
        }

        static async listarPorEmail(email){
            try {
                const aluno = await AlunoModel.listarPorEmail(email);
                if (aluno.length === 0){
                    return console.error('Aluno não encontrado!');
                }
                console.log('Aluno: ');
                return aluno
            } catch (error) {
                console.log('Erro ao listar aluno', error.message);
            }
        }

        static async totalAlunos(){
            try {
                const total = await AlunoModel.totalAlunos();
                if(total.length === 0){
                    return console.error('Não há alunos a serem exibidos.');
                }
                return total;

            } catch (error) {
                console.log('Erro ao encontrar alunos', error.message);
            }
        }
    }

export default AlunoController;