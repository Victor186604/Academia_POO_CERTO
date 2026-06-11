export enum StatusPagamento {
  PENDENTE = "PENDENTE",
  PAGO = "PAGO",
}

export class Mensalidade {
  private status: StatusPagamento;

  constructor(private valor: number) {
    this.status = StatusPagamento.PENDENTE;
  }

  getValor(): number {
    return this.valor;
  }

  getStatus(): StatusPagamento {
    return this.status;
  }

  pagarMensalidade(): void {
    if (this.status === StatusPagamento.PAGO) {
      throw new Error("Esta mensalidade já foi paga.");
    }

    this.status = StatusPagamento.PAGO;
  }

  mostrarDetalhes(): string {
    return `Valor: R$ ${this.valor.toFixed(2)} | Status: ${this.status}`;
  }
}
