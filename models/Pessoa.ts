export abstract class Pessoa {
  constructor(
    protected nome: string,
    protected idade: number,
    protected cpf: string
  ) {}

  mostrarDados(): string {
    return `Nome: ${this.nome} | Idade: ${this.idade} | CPF: ${this.cpf}`;
  }

  getNome(): string {
    return this.nome;
  }

  getCpf(): string {
    return this.cpf;
  }
}
