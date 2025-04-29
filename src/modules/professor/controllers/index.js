import ProfessorModel from "../models/index.js";

class ProfessorController{
    static async criar(nome, matricula, cod_curso){
        try {
            if (!nome || !matricula ) {
                return console.error('Todos os Campos Devem ser Preenchidos.');
            }
            const professor = await ProfessorModel.criarProfessor(nome, matricula, cod_curso);
            console.log('Professor Criado com Sucesso');
            return professor;
            
        } catch (error) {
            console.error(error);
            
        }
    }

    static async editar(nome, matricula, cod_curso){
        try {
            if (!nome || !matricula) {
                return console.error('Todos os Campos Devem ser Preenchidos.')
            }
            const turma = await ProfessorModel.editarProfessor(nome, matricula, cod_curso)
            if(turma.length === 0){
                return console.error('Professor não Encontrado')
            }
            console.log('Professor Atualizado com Sucesso!');
            
        } catch (error) {
            console.log('Erro ao Atualizar Professor', error.message);
            
        }
    }

    static async deletarProfessor(matricula){
        try {
            const professor = ProfessorModel.deletarProfessor(matricula);
            if(professor.length === 0){
                return console.error('Professor não encontrado.');
            }

            await ProfessorModel.deletarProfessor(matricula);
            console.log('Professor excluído com sucesso!');

            }
            catch (error) {
                console.log('Erro ao deletar Professor', error.message);
            }
        }
     
        static async deletarTodos(){
            try {
                await ProfessorModel.deletarTodos();
                console.log('Professores Deletados com sucesso!');
            } catch (error) {
                console.log('Erro ao Deletar Professores', error.message);
            }
        }

        static async listarTodos(){
            try {
                const professores = await ProfessorModel.listarTodos();
                if(professores.length === 0){
                    return console.log('Nenhum Professor a ser exibido!');
                }
                console.log('Listagem de Professores:');
                return professores;
            } catch (error) {
                console.error(error);
            }
        }


        static async listarPorMatricula(matricula){
            try {
                const professor = await ProfessorModel.listarPorMatricula(matricula);
                if (professor.length === 0){
                    return console.error('Professor não encontrada!');
                }
                console.log('Professor: ');
                return professor;
            } catch (error) {
                console.log('Erro ao listar Professor', error.message);
            }
        }

        
        static async totalProfessores(){
            try {
                const total = await ProfessorModel.totalProfessor();
                if(total.length === 0){
                    return console.error('Não há Professores a serem exibidos.');
                }
                return total;

            } catch (error) {
                console.log('Erro ao encontrar Professores', error.message);
            }
        }

}

export default ProfessorController;