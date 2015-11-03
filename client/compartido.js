var connections = new Array();  
connections.length = 0;
onconnect = function (e) {  
  console.log("connecting");
    var port = e.ports[0];
    console.log("connecting");
    port.addEventListener("message", function (e) {  
      var data = e.data;
      if (!data['id']) {
        port.postMessage({value: "Please identify yourself."});
      } else {
        switch (data['cmd']) {
          case 'connect':
            if (!(data['id'] in connections)) {
              connections[data['id']] = null;
              connections.length++;
              port.postMessage({value: data['id'] + " has connected on port #" + connections.length + "."});
            }		
            port.postMessage({value: "Received cmd of '" + data['cmd'] + "' from " + data['id'] + "."});
            if (connections.length == 1) {
              port.postMessage({value: "Starting calculation of Pi."});
              CalculatePi(10000, port);
            }
            break;
        }
      }
    }, false);  
    port.start();  
}

function CalculatePi(loop, port)
{
    var c = parseInt(loop);
    var n=1;
		
    for (var i=0,j=0,Pi=0;i<=c;i++) {
      Pi=Pi+(4/n)-(4/(n+2));
      n=n+4;
      if (++j == 1000) {
        port.postMessage({type: 'data', PiValue: Pi});
        j=0;
      }
    }
    port.postMessage({type: 'data', FinalPiValue: Pi});
}