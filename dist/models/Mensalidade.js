"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mensalidade = exports.StatusPagamento = void 0;
var StatusPagamento;
(function (StatusPagamento) {
    StatusPagamento["PENDENTE"] = "PENDENTE";
    StatusPagamento["PAGO"] = "PAGO";
})(StatusPagamento || (exports.StatusPagamento = StatusPagamento = {}));
class Mensalidade {
    constructor(valor) {
        this.valor = valor;
        this.status = StatusPagamento.PENDENTE;
    }
    getValor() {
        return this.valor;
    }
    getStatus() {
        return this.status;
    }
    pagarMensalidade() {
        if (this.status === StatusPagamento.PAGO) {
            throw new Error("Esta mensalidade já foi paga.");
        }
        this.status = StatusPagamento.PAGO;
    }
    mostrarDetalhes() {
        return `Valor: R$ ${this.valor.toFixed(2)} | Status: ${this.status}`;
    }
}
exports.Mensalidade = Mensalidade;
