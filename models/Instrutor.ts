import { Pessoa } from "./Pessoa";

export class Instrutor extends Pessoa {
  constructor(
    nome: string,
    idade: number,
    cpf: string,
    private especialidade: string
  ) {
    super(nome, idade, cpf);
  }

  getEspecialidade(): string {
    return this.especialidade;
  }

  mostrarDados(): string {
    const base = super.mostrarDados();
    return `[INSTRUTOR] ${base} | Especialidade: ${this.especialidade}`;
  }
}
