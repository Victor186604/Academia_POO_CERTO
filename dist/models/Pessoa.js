"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    mostrarDados() {
        return `Nome: ${this.nome} | Idade: ${this.idade} | CPF: ${this.cpf}`;
    }
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
}
exports.Pessoa = Pessoa;
