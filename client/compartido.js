var puertos = [];

onconnect = function (event) {

    var puerto = event.ports[0];
    puertos.push(puerto);
    puerto.start();

    puerto.addEventListener("message",
        function (event) {
            listenForMessage(event, puerto);
        });
}


listenForMessage = function (event, puerto) {
        puerto.postMessage("Respondiendo a : " + event.data + " tenemos " + puertos.length + " y tu eres el " + puerto);
}

var data = e.data;
switch (data.cmd) {
case 'start':
    port.postMessage("Worker: Starting You are connection number:" + connections);
    user = data.user;
    readTweets();
    break;
case 'stop':
    port.postMessage("Worker: Stopping");
    self.close();
    break;
default:
    port.postMessage("Worker: Error - Unknown Command");
};