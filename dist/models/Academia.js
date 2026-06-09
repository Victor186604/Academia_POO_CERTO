"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Academia = void 0;
class Academia {
    constructor(nome) {
        this.nome = nome;
        this.alunos = [];
        this.instrutores = [];
    }
    getNome() {
        return this.nome;
    }
    adicionarAluno(aluno) {
        const jaExiste = this.alunos.some((a) => a.getCpf() === aluno.getCpf() || a.getMatricula() === aluno.getMatricula());
        if (jaExiste) {
            throw new Error(`Aluno com CPF ou matrícula duplicada não pode ser adicionado.`);
        }
        this.alunos.push(aluno);
    }
    adicionarInstrutor(instrutor) {
        const jaExiste = this.instrutores.some((i) => i.getCpf() === instrutor.getCpf());
        if (jaExiste) {
            throw new Error(`Instrutor com CPF ${instrutor.getCpf()} já cadastrado.`);
        }
        this.instrutores.push(instrutor);
    }
    listarAlunos() {
        return this.alunos;
    }
    listarInstrutores() {
        return this.instrutores;
    }
    buscarAlunoPorMatricula(matricula) {
        return this.alunos.find((a) => a.getMatricula() === matricula);
    }
    totalAlunos() {
        return this.alunos.length;
    }
    totalInstrutores() {
        return this.instrutores.length;
    }
    exibirResumo() {
        console.log(`\n Academia: ${this.nome}`);
        console.log(`Total de alunos: ${this.totalAlunos()}`);
        console.log(`Total de instrutores: ${this.totalInstrutores()}`);
    }
}
exports.Academia = Academia;
