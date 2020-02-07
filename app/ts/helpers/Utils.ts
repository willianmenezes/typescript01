import { Imprimivel } from "../models/index";

export function Imprime(...objetos: Imprimivel[]) {

    objetos.forEach(obj => obj.paraTexto());
}