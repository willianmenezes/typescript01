export function throttle(milisegundos = 500) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodooriginal = descriptor.value;

        let timer = 0;
        descriptor.value = function (...args: any[]) {

            if (event) event.preventDefault();

            clearInterval(timer)
            timer = setTimeout(() => {
                metodooriginal.apply(this, args);
            }, milisegundos);
        }

        return descriptor;
    }
}