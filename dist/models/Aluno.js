"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
const Pessoa_1 = require("./Pessoa");
class Aluno extends Pessoa_1.Pessoa {
    constructor(nome, idade, cpf, matricula) {
        super(nome, idade, cpf);
        this.matricula = matricula;
        this.treino = null;
        this.mensalidade = null;
    }
    getMatricula() {
        return this.matricula;
    }
    getTreino() {
        return this.treino;
    }
    getMensalidade() {
        return this.mensalidade;
    }
    vincularTreino(treino) {
        this.treino = treino;
    }
    vincularMensalidade(mensalidade) {
        this.mensalidade = mensalidade;
    }
    mostrarDados() {
        const base = super.mostrarDados();
        const treino = this.treino ? this.treino.getNome() : "Sem treino";
        const mensalidade = this.mensalidade
            ? this.mensalidade.mostrarDetalhes()
            : "Sem mensalidade";
        return `[ALUNO] ${base} | Matrícula: ${this.matricula} | Treino: ${treino} | Mensalidade: ${mensalidade}`;
    }
}
exports.Aluno = Aluno;
