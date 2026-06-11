"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Academia_1 = require("./models/Academia");
const Aluno_1 = require("./models/Aluno");
const Instrutor_1 = require("./models/Instrutor");
const Treino_1 = require("./models/Treino");
const Exercicio_1 = require("./models/Exercicio");
const Mensalidade_1 = require("./models/Mensalidade");
const separador = () => console.log("-".repeat(60));
const academia = new Academia_1.Academia("FitLife Academia");
const instrutor1 = new Instrutor_1.Instrutor("Carlos Souza", 35, "111.111.111-11", "Musculação");
const instrutor2 = new Instrutor_1.Instrutor("Fernanda Lima", 29, "222.222.222-22", "Crossfit");
academia.adicionarInstrutor(instrutor1);
academia.adicionarInstrutor(instrutor2);
const exercicio1 = new Exercicio_1.Exercicio("Supino Reto", 4, 10);
const exercicio2 = new Exercicio_1.Exercicio("Agachamento", 4, 12);
const exercicio3 = new Exercicio_1.Exercicio("Remada Curvada", 3, 10);
const exercicio4 = new Exercicio_1.Exercicio("Desenvolvimento", 3, 12);
const treinoA = new Treino_1.Treino("Treino A - Peito e Costas");
treinoA.adicionarExercicio(exercicio1);
treinoA.adicionarExercicio(exercicio2);
treinoA.adicionarExercicio(exercicio3);
const treinoB = new Treino_1.Treino("Treino B - Ombro e Braço");
treinoB.adicionarExercicio(exercicio4);
const mensalidade1 = new Mensalidade_1.Mensalidade(99.9);
const mensalidade2 = new Mensalidade_1.Mensalidade(149.9);
const mensalidade3 = new Mensalidade_1.Mensalidade(99.9);
const aluno1 = new Aluno_1.Aluno("João Silva", 22, "333.333.333-33", "MAT-001");
const aluno2 = new Aluno_1.Aluno("Maria Oliveira", 28, "444.444.444-44", "MAT-002");
const aluno3 = new Aluno_1.Aluno("Pedro Santos", 19, "555.555.555-55", "MAT-003");
const aluno4 = new Aluno_1.Aluno("Welinton Pereira Sampaio", 19, "668.669.667-69", "MAT-004");
aluno1.vincularTreino(treinoA);
aluno1.vincularMensalidade(mensalidade1);
aluno2.vincularTreino(treinoB);
aluno2.vincularMensalidade(mensalidade2);
aluno3.vincularTreino(treinoA);
aluno3.vincularMensalidade(mensalidade3);
academia.adicionarAluno(aluno1);
academia.adicionarAluno(aluno2);
academia.adicionarAluno(aluno3);
console.log("\n========================================");
console.log("   SISTEMA DE GERENCIAMENTO DE ACADEMIA ");
console.log("========================================");
academia.exibirResumo();
separador();
console.log("\n INSTRUTORES CADASTRADOS:\n");
academia.listarInstrutores().forEach((i) => console.log(i.mostrarDados()));
separador();
console.log("\n ALUNOS CADASTRADOS:\n");
academia.listarAlunos().forEach((a) => console.log(a.mostrarDados()));
separador();
console.log("\n DETALHES DOS TREINOS:\n");
console.log(treinoA.mostrarTreino());
console.log();
console.log(treinoB.mostrarTreino());
separador();
console.log("\n PAGAMENTO DE MENSALIDADES:\n");
console.log(`Mensalidade do ${aluno1.getNome()} antes do pagamento:`);
console.log(mensalidade1.mostrarDetalhes());
mensalidade1.pagarMensalidade();
console.log(`Mensalidade do ${aluno1.getNome()} após pagamento:`);
console.log(mensalidade1.mostrarDetalhes());
separador();
console.log("\n TESTE: REGRA - Mensalidade já paga:\n");
try {
    mensalidade1.pagarMensalidade();
}
catch (error) {
    console.log(`Erro capturado: ${error.message}`);
}
separador();
console.log("\n TESTE: REGRA - Exercício duplicado no treino:\n");
try {
    const duplicado = new Exercicio_1.Exercicio("Supino Reto", 3, 8);
    treinoA.adicionarExercicio(duplicado);
}
catch (error) {
    console.log(`Erro capturado: ${error.message}`);
}
separador();
console.log("\n TESTE: REGRA - Aluno duplicado na academia:\n");
try {
    const alunoRepetido = new Aluno_1.Aluno("João Clone", 22, "333.333.333-33", "MAT-001");
    academia.adicionarAluno(alunoRepetido);
}
catch (error) {
    console.log(`Erro capturado: ${error.message}`);
}
separador();
console.log("\n POLIMORFISMO - Pessoas do sistema:\n");
const pessoas = [instrutor1, instrutor2, aluno1, aluno2, aluno3];
pessoas.forEach((p) => console.log(p.mostrarDados()));
separador();
console.log("\n BUSCA POR MATRÍCULA:\n");
const encontrado = academia.buscarAlunoPorMatricula("MAT-002");
if (encontrado) {
    console.log(`Aluno encontrado: ${encontrado.mostrarDados()}`);
}
separador();
console.log("\n Execução concluída com sucesso.\n");
