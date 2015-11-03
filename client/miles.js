(function () {
postMessage('milesSTART');
for (i = 0; i < 100000; i++) {
	if (i % 1000 == 0) {
				postMessage(i);
	}
}
postMessage('milesEND');
}())