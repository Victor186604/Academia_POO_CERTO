# Sistema de Gerenciamento de Academia

Trabalho Final — Programação Orientada a Objetos  
Linguagem: TypeScript

---

## Problema Resolvido

Academias precisam controlar alunos, instrutores, treinos e mensalidades de forma organizada. Este sistema simula esse controle em memória, aplicando os princípios da Programação Orientada a Objetos para modelar as entidades e regras do negócio de forma clara e reutilizável.

---

## Funcionalidades

- Cadastro de alunos com matrícula, treino e mensalidade vinculados
- Cadastro de instrutores com especialidade
- Criação de treinos com lista de exercícios
- Prevenção de exercícios duplicados no mesmo treino
- Controle de pagamento de mensalidade com bloqueio de duplo pagamento
- Bloqueio de cadastro duplicado de aluno (por CPF ou matrícula)
- Busca de aluno por matrícula
- Exibição de resumo da academia
- Demonstração de polimorfismo com lista de pessoas

---

## Conceitos de POO Utilizados

### Abstração
A classe `Pessoa` é abstrata e define o contrato comum entre `Aluno` e `Instrutor`, sem poder ser instanciada diretamente.

### Herança
`Aluno` e `Instrutor` herdam de `Pessoa`, reaproveitando os atributos `nome`, `idade` e `cpf`, e sobrescrevendo o método `mostrarDados()`.

### Polimorfismo
Uma lista do tipo `Pessoa[]` pode armazenar tanto `Aluno` quanto `Instrutor`. Ao chamar `mostrarDados()` em cada objeto, cada classe executa sua própria versão do método.

### Encapsulamento
Todos os atributos das classes são privados (`private`) ou protegidos (`protected`). O acesso é feito apenas por meio de métodos públicos (`getters` e métodos de negócio).

### Composição
`Treino` é composto por objetos `Exercicio`. Os exercícios não existem de forma independente fora de um treino no contexto deste sistema.

### Associação
`Aluno` se associa a `Treino` e a `Mensalidade`. Esses objetos existem de forma independente e são vinculados ao aluno.

### Agregação
`Academia` agrega listas de `Aluno` e `Instrutor`. Os objetos existem independentemente da academia.

---

## Regras de Negócio Implementadas

**`Treino.adicionarExercicio()`**  
Verifica se já existe um exercício com o mesmo nome no treino. Caso positivo, lança um erro impedindo a duplicação.

**`Mensalidade.pagarMensalidade()`**  
Verifica se o status já é `PAGO`. Caso positivo, lança um erro impedindo o pagamento duplo.

**`Academia.adicionarAluno()`**  
Verifica se já existe um aluno com o mesmo CPF ou matrícula antes de adicionar.

---

## TypeScript — Explicação da Linguagem

TypeScript é um superset de JavaScript desenvolvido pela Microsoft que adiciona tipagem estática opcional ao JavaScript. O código TypeScript é compilado para JavaScript puro antes de ser executado.

**Por que usar TypeScript em POO?**

- **Tipos estáticos**: definem com precisão o que cada variável, parâmetro e retorno de função pode conter, eliminando erros comuns em tempo de execução.
- **Classes e interfaces**: TypeScript tem suporte nativo e completo à orientação a objetos, com `class`, `abstract`, `interface`, `extends`, `implements` e modificadores de acesso (`public`, `private`, `protected`).
- **Enums**: permitem representar estados fixos como `StatusPagamento.PAGO` de forma segura e legível.
- **Detecção de erros em tempo de desenvolvimento**: o compilador alerta sobre erros antes mesmo de o código rodar, tornando o desenvolvimento mais seguro.

---

## Estrutura do Projeto

```
academia-poo/
├── src/
│   ├── models/
│   │   ├── Pessoa.ts
│   │   ├── Aluno.ts
│   │   ├── Instrutor.ts
│   │   ├── Treino.ts
│   │   ├── Exercicio.ts
│   │   ├── Mensalidade.ts
│   │   └── Academia.ts
│   └── main.ts
├── docs/
│   └── diagrama-uml.md
├── package.json
├── tsconfig.json
└── README.md
```

---

## Como Executar

**Pré-requisitos:** Node.js instalado (versão 16 ou superior)

```bash
npm install
npm run dev
```

Para compilar e executar via JavaScript:

```bash
npm run build
npm start
```

---

## Classes de Domínio

| Classe       | Tipo         | Descrição                                      |
|--------------|--------------|------------------------------------------------|
| `Pessoa`     | Abstrata     | Base com dados comuns a alunos e instrutores   |
| `Aluno`      | Concreta     | Herda de Pessoa, possui treino e mensalidade   |
| `Instrutor`  | Concreta     | Herda de Pessoa, possui especialidade          |
| `Treino`     | Concreta     | Composto por exercícios                        |
| `Exercicio`  | Concreta     | Unidade de um treino                           |
| `Mensalidade`| Concreta     | Controla pagamento com regra de negócio        |
| `Academia`   | Concreta     | Gerencia alunos e instrutores                  |
