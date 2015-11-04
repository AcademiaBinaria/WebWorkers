var tareas = {
	pendientes: 0,
	totales: 0
};

self.addEventListener('message', function (mensajeEvento) {
	console.log("addEventListener");
	tareas.pendientes++;
	tareas.totales++;
	if (tareas.pendientes >= 5) {
		console.log("Trabajador procesando: " + tareas.pendientes);
		tareas.pendientes = 0;
		postMessage({
			'accion': 'procesando',
			'tareas': tareas
		});
	} else {
		console.log("Trabajador encolando: " + tareas.pendientes);
		postMessage({
			'accion': 'encolando',
			'tareas': tareas
		});
	}

});
