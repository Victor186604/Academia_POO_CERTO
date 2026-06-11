import { Aluno } from "./Aluno";
import { Instrutor } from "./Instrutor";

export class Academia {
  private alunos: Aluno[] = [];
  private instrutores: Instrutor[] = [];

  constructor(private nome: string) {}

  getNome(): string {
    return this.nome;
  }

  adicionarAluno(aluno: Aluno): void {
    const jaExiste = this.alunos.some(
      (a) => a.getCpf() === aluno.getCpf() || a.getMatricula() === aluno.getMatricula()
    );

    if (jaExiste) {
      throw new Error(
        `Aluno com CPF ou matrícula duplicada não pode ser adicionado.`
      );
    }

    this.alunos.push(aluno);
  }

  adicionarInstrutor(instrutor: Instrutor): void {
    const jaExiste = this.instrutores.some(
      (i) => i.getCpf() === instrutor.getCpf()
    );

    if (jaExiste) {
      throw new Error(`Instrutor com CPF ${instrutor.getCpf()} já cadastrado.`);
    }

    this.instrutores.push(instrutor);
  }

  listarAlunos(): Aluno[] {
    return this.alunos;
  }

  listarInstrutores(): Instrutor[] {
    return this.instrutores;
  }

  buscarAlunoPorMatricula(matricula: string): Aluno | undefined {
    return this.alunos.find((a) => a.getMatricula() === matricula);
  }

  totalAlunos(): number {
    return this.alunos.length;
  }

  totalInstrutores(): number {
    return this.instrutores.length;
  }

  exibirResumo(): void {
    console.log(`\n Academia: ${this.nome}`);
    console.log(`Total de alunos: ${this.totalAlunos()}`);
    console.log(`Total de instrutores: ${this.totalInstrutores()}`);
  }
}
