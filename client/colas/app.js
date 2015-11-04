angular
	.module('webWorkers', [])
	.controller('WebWorkerCtrl', controlador);


function controlador() {
	var vm = this;
	vm.pendientes = [];
	vm.terminadas = [];
	vm.totales = [];
	vm.tareas = {};

	var trabajador = new Worker('trabajador.js');
	console.log('trabajador instanciado');

	trabajador.onmessage = function (mensajeEvento) {
		var mensaje = mensajeEvento.data;
		vm.pendientes.push("tarea" + mensaje.tareas.totales);
		if (mensaje.accion == "encolando") {
			console.log('encolada : ' + JSON.stringify(vm.tareas));
		} else {
			vm.terminadas = vm.terminadas.concat(vm.pendientes);
			vm.pendientes = [];
			console.log('procesadas : ' + JSON.stringify(vm.tareas));
		}
		vm.tareas = mensaje.tareas;
		vm.totales.push("tarea" + mensaje.tareas.totales);
	};

	vm.agregarTarea = function () {
		console.log('nueva tarea');
		trabajador.postMessage('nueva tarea');
	}
}
