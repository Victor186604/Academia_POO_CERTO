export class Exercicio {
  constructor(
    private nome: string,
    private series: number,
    private repeticoes: number
  ) {}

  getNome(): string {
    return this.nome;
  }

  getSeries(): number {
    return this.series;
  }

  getRepeticoes(): number {
    return this.repeticoes;
  }

  mostrarDetalhes(): string {
    return `${this.nome} - ${this.series}x${this.repeticoes}`;
  }
}
