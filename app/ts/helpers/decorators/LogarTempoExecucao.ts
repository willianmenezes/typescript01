export function LogarTempoDeExecucao(emSegundos: boolean = false) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodooriginal = descriptor.value;

        descriptor.value = function (...args: any[]) {

            let unidade = 'ms'
            let dividor = 1

            if (emSegundos) {
                unidade = 's';
                dividor = 1000;
            }

            console.log('---------------------------');
            console.log(`Parametros passado para o metodo ${propertyKey}: ${JSON.stringify(args)}`);
            console.log(`target: ${JSON.stringify(target)}`);
            

            const t1 = performance.now();
            const retorno = metodooriginal.apply(this, args);
            const t2 = performance.now();

            console.log(`O tempo de execução do método ${propertyKey} é de ${(t2 - t1) / dividor} ${unidade}`);

            console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);


            return retorno;
        }

        return descriptor;
    }
}