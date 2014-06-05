# Crear y comunicarse con webworkers dedicados
- Creación
- API
    - `onmessage` / `addEventListener`
    - `postMessage`


# Velocidad
- Usar **sólo** cuando va a trabajar **mucho** en segundo plano


# WebServices
- `var url= url("http://midominio.com/?callback=mifuncionlocal")`
- `importScripts(url);`

# Pasando objetos
- Hasta ahora hemos enviado y recibido siempre cadenas
- Pero tambien se pueden enviar objetos JSON 
### Transferable objects
`postMessage()` recibe strings, File, Blob, arrayBuffer pero copiandolo =>lento
Una mejora importante en ciertos navegadores modernos es `webKitPostMessage(arrayBuffer,[arrayBuffer])`

# Inline Workers
- Para reducir llamadas y evitar la precompilación
- Se carga con el objeto `Blob` 
- `window.webkitURL.createObjectURL(new Blob('texto del worker'))`


# Shared worker
- Instancia única compartida por varias aplicaciones (pestañas y ventanas)
- Transmision de datos: cache, offline, syncro


# Debug
- `onerror` handler
- Chrome dev tools

# WebWorkers en NodeJS
- node-webworker

