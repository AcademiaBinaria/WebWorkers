(function () {
	// Buscar número primos
	postMessage('primosSTART');
	var n = 1;
	postMessage(n);
	var primos = [];
	primos.push(n);
	seguirBuscando: while (n < 100000) {
		n += 1;
		var max = Math.sqrt(n)
		for (var i = 2; i <= max; i += 1) {
			if (n % i == 0) {
				continue seguirBuscando;
			}
		}
		primos.push(n);
	}
	postMessage(primos);
	postMessage('primosEND');
}())