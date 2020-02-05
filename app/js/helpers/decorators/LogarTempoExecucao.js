System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LogarTempoDeExecucao() {
        return function (target, propertyKey, descriptor) {
            const metodooriginal = descriptor.value;
            descriptor.value = function (...args) {
                const retorno = metodooriginal.apply(this, args);
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
