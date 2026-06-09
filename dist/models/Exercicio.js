"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercicio = void 0;
class Exercicio {
    constructor(nome, series, repeticoes) {
        this.nome = nome;
        this.series = series;
        this.repeticoes = repeticoes;
    }
    getNome() {
        return this.nome;
    }
    getSeries() {
        return this.series;
    }
    getRepeticoes() {
        return this.repeticoes;
    }
    mostrarDetalhes() {
        return `${this.nome} - ${this.series}x${this.repeticoes}`;
    }
}
exports.Exercicio = Exercicio;
