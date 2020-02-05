export function LogarTempoDeExecucao() {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodooriginal = descriptor.value;

        descriptor.value = function(...args: any[]){

            const retorno = metodooriginal.apply(this, args);

            return retorno;
        }

        return descriptor;
    }
}