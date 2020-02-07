export class Negociacao {

    constructor(
        readonly data: Date,
        readonly quantidade: number,
        readonly valor: number) { };

    get volume() {
        return this.valor * this.quantidade;
    }

    paraTexto(): void {
        console.log(
            `
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
            Volume: ${this.volume}
            `
        );
        
    }
}