import ProfessorController from "../controllers/index.js";
import prompt from "prompt-sync";

const input = prompt()

class ProfessorView{
    static async criar(){
        const nome = input(`Digite o Nome: `)
        const matricula = input(`Digite a Matricula: `)
        const cod_turma = input(`Digite o Codigo de Turma: `)

        const professor = await ProfessorController.criar(nome , matricula, cod_turma);
        console.table(professor);
    }

    static async editar(){
        const nome = input(`Digite o nome: `)
        const matricula = input(`Digite a Matricula: `)
        const cod_turma = input(`Digite o Codigo da Turma: `)

        const turma = await TurmaController.editar(nome, matricula, cod_turma);
        console.table(turma);
    }

    static async listarTodos(){
        const professor = await ProfessorController.listarTodos();
        console.table(professor);
    }

    static async listarPorMatricula(){
        const cod = input(`Digite o Codigo de Matricula: `)

        const professor = await ProfessorController.listarPorMatricula(matricula);
        console.table(professor);
    }

    static async deletarTodos(){
        await ProfessorController.deletarTodos();
    }

    static async deletarProfessor(){
        const matricula = input(`Digite a Matricula: `)
        
        const professor = await ProfessorController.deletarProfessor(matricula);
        console.table(professor);
    }

    static async totalProfessor(){
        const total = await ProfessorController.totalProfessores();
        console.table(total);
    }
}

export default ProfessorView;