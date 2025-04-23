import AlunoController from "../controllers/index.js";
import prompt from "prompt-sync";

const input = prompt()

class AlunoView{
    static async criar(){
        const nome = input(`Digite Seu Nome: `)
        const email = input(`Digite Seu E-mail: `)
        const matricula = input(`Digite Sua Matricula: `)
        const telefone = input(`Digite Seu Telefone: `)
        const cod_turma = input(`Digite Seu Codigo de Turma: `)

        const aluno = await AlunoController.criar(nome, email, matricula, telefone, cod_turma);
        console.table(aluno);
    }

    static async editar(){
        const nome = input(`Digite Seu Nome: `)
        const email = input(`Digite Seu E-mail: `)
        const matricula = input(`Digite Sua Matricula: `)
        const telefone = input(`Digite Seu Telefone: `)
        const cod_turma = input(`Digite Seu Codigo de Turma: `)

        const aluno = await AlunoController.editar(nome, email, matricula, telefone, cod_turma);
        console.table(aluno);
    }

    static async listarTodos(){
        const aluno = await AlunoController.listarTodos();
        console.table(aluno);
    }

    static async listarPorEmail(){
        const email = input(`Digite Seu E-mail: `)

        const aluno = await AlunoController.listarPorEmail(email);
        console.table(aluno);
    }

    static async deletarTodos(){
        await AlunoController.deletarTodos();
    }

    static async deletarAluno(){
        const email = input(`Digite Seu E-mail: `)
        
        const aluno = await AlunoController.deletarAluno(email);
        console.table(aluno);
    }

    static async totalAlunos(){
        const total = await AlunoController.totalAlunos();
        console.table(total);
    }
}

export default AlunoView;