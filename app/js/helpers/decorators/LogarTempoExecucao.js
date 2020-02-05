System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LogarTempoDeExecucao(emSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodooriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = 'ms';
                let dividor = 1;
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
            };
            return descriptor;
        };
    }
    exports_1("LogarTempoDeExecucao", LogarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
