WebWorkers
==========

---
---

## 0. Qué son los Web-Workers y para qué son útiles
- Son **funciones** `JavaScript` 
- Se ejecutan en un **thread** distinto al principal
- No tienen acceso al DOM 
- Son costoso de instanciar
- Pero muy eficientes una vez iniciados
- El **API de comunicación** es muy sencilla
- Puede ser dedicados o compartidos.

---
---

## 1. Crear y comunicarse con webworkers dedicados
- Creación
    - `var worker = new Worker("miTrabajador.js");`
    - 
- API
    - `onmessage` / `addEventListener`
    - `postMessage`

---
---

## 2. Velocidad
- Usar **sólo** cuando va a trabajar **mucho** en segundo plano
- Las métricas para trabajos normales no suelen favorecer
- Si hay mucho intercambio de mensajes también se ralentiza
- Lo ideal es **un GRAN tabajo** que avise al acabaro en hitos importantes

---
---

## 3. WebServices
- Uno de los usos más comunes es **procesar JSON**, local o proveniente de servicios web
    - `var url= url("http://midominio.com/?callback=miFuncionLocal")`
    - `importScripts(url);`
- En este caso al teminar la descarga, 
- Se llama a una función local para que haga algo costoso

---
---

## 4. Pasando objetos
- Hasta ahora hemos enviado y recibido siempre **cadenas**
- Podemos **serializar y deserializar** cualquier objeto para comunicarlo
- Pero tambien se pueden enviar objetos **JavaScript** directamente

#### 4.1 Transferable objects
`postMessage()` recibe strings, File, Blob, arrayBuffer pero creando una copia
   - =>lento y costoso en memoria
Una mejora importante en ciertos navegadores modernos es `webKitPostMessage(arrayBuffer,[arrayBuffer])`
En este caso se pasa **una referencia**

---
---

## 5. Inline Workers
- Para reducir llamadas y evitar la precompilación
- Se carga con el objeto `Blob` 
- `window.webkitURL.createObjectURL(new Blob('texto del worker'))`

---
---

## 6. Shared worker
- Instancia única compartida por varias aplicaciones (pestañas y ventanas)
- Sus principal uso es en Transmisión de datos: 
   - cache, offline, syncro
   - se aprovecha mejor la memoria y el coste de inicio

---
---

## 7. Debug
- Escribir en consola todo lo que se pueda,
- Aumentar información para saber cuando se producen los errores
- Usar herramientas y técnias de desarrollo adecuadas
   - `onerror` handler
   - Chrome dev tools

---
---

## 8. WebWorkers en NodeJS
- NodeJS es conocido por su **ejecusión en bucle** dentro de un único thread
- Hay ocasiones en que ciertos procesos costosos **merecen un therad** aparte
- En este csao usamos **la misma API cliente**
- El módulo que ofrece el API es `node-webworker`

---
---

@albertoBasalo

---
---
