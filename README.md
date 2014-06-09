WebWorkers
==========

---

## 0. Qué son los Web-Workers y para qué son útiles
- Son funciones JavaScript 
- Se ejecutan en un thread distinto al principal
- No tienen acceso al DOM 
- Son costoso de instanciar
- Pero muy eficientes una vez iniciados
- El API de comunicación es muy sencilla
- Puede ser dedicados o compartidos.

---

## 1. Crear y comunicarse con webworkers dedicados
- Creación
    - `var worker = new Worker("miTrabajador.js");`
    - 
- API
    - `onmessage` / `addEventListener`
    - `postMessage`

---

## 2. Velocidad
- Usar **sólo** cuando va a trabajar **mucho** en segundo plano
- Las métricas para trabajos normales no suelen favorecer
- Si hay mucho intercambio de mensajes también se ralentiza
- Lo ideal es un GRAN tabajo que avise al acabaro en hitos importantes

---

## 3. WebServices
- Uno de los usos principales es procesar JSON, local o proveniente de servicios web
    - `var url= url("http://midominio.com/?callback=miFuncionLocal")`
    - `importScripts(url);`
- En este caso al teminar la descarga, 
- Se llama a una función local para que haga algo costoso


---

## 4. Pasando objetos
- Hasta ahora hemos enviado y recibido siempre cadenas
- Podemos serializar y deserializar cualquier objeto para comunicarlo
- Pero tambien se pueden enviar objetos JSON directamente

#### 4.1 Transferable objects
`postMessage()` recibe strings, File, Blob, arrayBuffer pero copiandolo =>lento
Una mejora importante en ciertos navegadores modernos es `webKitPostMessage(arrayBuffer,[arrayBuffer])`
En este caso se pasa una referencia

---

## 5. Inline Workers
- Para reducir llamadas y evitar la precompilación
- Se carga con el objeto `Blob` 
- `window.webkitURL.createObjectURL(new Blob('texto del worker'))`

---

## 6. Shared worker
- Instancia única compartida por varias aplicaciones (pestañas y ventanas)
- Transmision de datos: cache, offline, syncro

---

## 7. Debug
- `onerror` handler
- Chrome dev tools

---

## 8. WebWorkers en NodeJS
- node-webworker

---

@albertoBasalo

---
- API
    - `onmessage` / `addEventListener`
    - `postMessage`

---

## 2. Velocidad
- Usar **sólo** cuando va a trabajar **mucho** en segundo plano

---

## 3. WebServices
- `var url= url("http://midominio.com/?callback=mifuncionlocal")`
- `importScripts(url);`

---

## 4. Pasando objetos
- Hasta ahora hemos enviado y recibido siempre cadenas
- Pero tambien se pueden enviar objetos JSON 

#### 4.1 Transferable objects
`postMessage()` recibe strings, File, Blob, arrayBuffer pero copiandolo =>lento
Una mejora importante en ciertos navegadores modernos es `webKitPostMessage(arrayBuffer,[arrayBuffer])`

---

## 5. Inline Workers
- Para reducir llamadas y evitar la precompilación
- Se carga con el objeto `Blob` 
- `window.webkitURL.createObjectURL(new Blob('texto del worker'))`

---

## 6. Shared worker
- Instancia única compartida por varias aplicaciones (pestañas y ventanas)
- Transmision de datos: cache, offline, syncro

---

## 7. Debug
- `onerror` handler
- Chrome dev tools

---

## 8. WebWorkers en NodeJS
- node-webworker

---

@albertoBasalo

---
