"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instrutor = void 0;
const Pessoa_1 = require("./Pessoa");
class Instrutor extends Pessoa_1.Pessoa {
    constructor(nome, idade, cpf, especialidade) {
        super(nome, idade, cpf);
        this.especialidade = especialidade;
    }
    getEspecialidade() {
        return this.especialidade;
    }
    mostrarDados() {
        const base = super.mostrarDados();
        return `[INSTRUTOR] ${base} | Especialidade: ${this.especialidade}`;
    }
}
exports.Instrutor = Instrutor;
