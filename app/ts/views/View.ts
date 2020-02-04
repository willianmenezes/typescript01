abstract class View<T> {

    private _elemento: Element;

    constructor(seletor: string) {

        this._elemento = document.querySelector(seletor);
    }

    update(modelo: T) {

        this._elemento.innerHTML = this.template(modelo)
    }

    abstract template(modelo: T): string;
}