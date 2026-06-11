import { Pessoa } from "./Pessoa";
import { Treino } from "./Treino";
import { Mensalidade } from "./Mensalidade";

export class Aluno extends Pessoa {
  private treino: Treino | null = null;
  private mensalidade: Mensalidade | null = null;

  constructor(
    nome: string,
    idade: number,
    cpf: string,
    private matricula: string
  ) {
    super(nome, idade, cpf);
  }

  getMatricula(): string {
    return this.matricula;
  }

  getTreino(): Treino | null {
    return this.treino;
  }

  getMensalidade(): Mensalidade | null {
    return this.mensalidade;
  }

  vincularTreino(treino: Treino): void {
    this.treino = treino;
  }

  vincularMensalidade(mensalidade: Mensalidade): void {
    this.mensalidade = mensalidade;
  }

  mostrarDados(): string {
    const base = super.mostrarDados();
    const treino = this.treino ? this.treino.getNome() : "Sem treino";
    const mensalidade = this.mensalidade
      ? this.mensalidade.mostrarDetalhes()
      : "Sem mensalidade";

    return `[ALUNO] ${base} | Matrícula: ${this.matricula} | Treino: ${treino} | Mensalidade: ${mensalidade}`;
  }
}
