import { Exercicio } from "./Exercicio";

export class Treino {
  private exercicios: Exercicio[] = [];

  constructor(private nome: string) {}

  getNome(): string {
    return this.nome;
  }

  getExercicios(): Exercicio[] {
    return this.exercicios;
  }

  adicionarExercicio(exercicio: Exercicio): void {
    const jaExiste = this.exercicios.some(
      (e) => e.getNome().toLowerCase() === exercicio.getNome().toLowerCase()
    );

    if (jaExiste) {
      throw new Error(
        `Exercício "${exercicio.getNome()}" já está no treino "${this.nome}".`
      );
    }

    this.exercicios.push(exercicio);
  }

  removerExercicio(nomeExercicio: string): void {
    const index = this.exercicios.findIndex(
      (e) => e.getNome().toLowerCase() === nomeExercicio.toLowerCase()
    );

    if (index === -1) {
      throw new Error(`Exercício "${nomeExercicio}" não encontrado no treino.`);
    }

    this.exercicios.splice(index, 1);
  }

  mostrarTreino(): string {
    if (this.exercicios.length === 0) {
      return `Treino: ${this.nome} | Sem exercícios cadastrados.`;
    }

    const lista = this.exercicios.map((e) => `  - ${e.mostrarDetalhes()}`).join("\n");
    return `Treino: ${this.nome}\n${lista}`;
  }
}
