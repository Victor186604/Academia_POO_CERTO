"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Treino = void 0;
class Treino {
    constructor(nome) {
        this.nome = nome;
        this.exercicios = [];
    }
    getNome() {
        return this.nome;
    }
    getExercicios() {
        return this.exercicios;
    }
    adicionarExercicio(exercicio) {
        const jaExiste = this.exercicios.some((e) => e.getNome().toLowerCase() === exercicio.getNome().toLowerCase());
        if (jaExiste) {
            throw new Error(`Exercício "${exercicio.getNome()}" já está no treino "${this.nome}".`);
        }
        this.exercicios.push(exercicio);
    }
    removerExercicio(nomeExercicio) {
        const index = this.exercicios.findIndex((e) => e.getNome().toLowerCase() === nomeExercicio.toLowerCase());
        if (index === -1) {
            throw new Error(`Exercício "${nomeExercicio}" não encontrado no treino.`);
        }
        this.exercicios.splice(index, 1);
    }
    mostrarTreino() {
        if (this.exercicios.length === 0) {
            return `Treino: ${this.nome} | Sem exercícios cadastrados.`;
        }
        const lista = this.exercicios.map((e) => `  - ${e.mostrarDetalhes()}`).join("\n");
        return `Treino: ${this.nome}\n${lista}`;
    }
}
exports.Treino = Treino;
