// Buscar número primos de una forma más controlada
self.addEventListener('message', function (evento) {
    var data = evento.data;
    var ejecutar = true;
    switch (data.comando) {
    case 'iniciar':
        postMessage('Arrancando a las :' + new Date());
        for (i = 1; i <= data.mayor; i++) {
            postMessage('Obteniendo primos menores que :' + i);
            var resultado = misPrimos(i);
            postMessage(resultado);
        }
        break;
    case 'parar':
        postMessage('Parando a las :' + new Date());
        ejecutar = false;
        self.close();
        break;
    default:
        postMessage('???');
    }
}, false);


function misPrimos(numero) {
    var primos = [];
    var n = 1;
    postMessage(n);
    seguirBuscando: while (n < numero) {
        n += 1;
        var max = Math.sqrt(n)
        for (var i = 2; i <= max; i += 1) {
            if (n % i == 0) {
                continue seguirBuscando;
            }
        }
        primos.push(n);
    }
    return primos;
}