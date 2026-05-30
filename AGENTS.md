# AGENTS.md — El Paso Zapateria

Este archivo documenta como se uso inteligencia artificial (IA)
para mejorar el proyecto, que prompts se usaron y que aporto
cada agente al resultado final.

---

## Agente 1 — Arquitecto de Estructuras de Datos

| Atributo | Detalle |
|----------|---------|
| Herramienta | Claude Sonnet 4.6 (claude.ai) |
| Rol asignado | Disenador e implementador de la Pila y la Cola |
| Etapa del proyecto | Mejora del codigo fuente (index.html) |
| Modo de uso | Conversacion iterativa con prompts especificos |

### Funciones desempenadas

**1. Disenar la Pila (Stack) como historial de navegacion**

El proyecto original no tenia ninguna estructura de datos formal.
El agente propuso usar una Pila LIFO (Last In, First Out) para
registrar el historial de filtros del catalogo. Explico que una
Pila es la eleccion correcta porque el usuario quiere deshacer
la ultima accion primero, exactamente como funciona el boton
Atras de cualquier navegador.

**2. Implementar las operaciones Push y Pop**

El agente implemento pushHistorial() que guarda el estado actual
de los 4 filtros (categoria, color, texto, orden) antes de cada
cambio, y popHistorial() que restaura el estado anterior.
Explico que .pop() en JavaScript remueve el ultimo elemento del
arreglo, reproduciendo el comportamiento LIFO de una pila clasica.

**3. Implementar el panel visual de la Pila**

El agente diseno el panel lateral que muestra los estados
guardados de mas reciente a mas antiguo. Esto hace visible la
estructura durante la demo sin abrir la consola del navegador.

**4. Disenar la Cola (Queue) para el historial del chat**

El agente implemento una Cola FIFO de 10 mensajes para el
chatbot. Cuando se supera el limite, el mensaje mas antiguo sale
primero con .shift(). Explico que la Cola complementa la Pila:
ambas son estructuras distintas aplicadas a problemas distintos.

**5. Interceptar filtrarPorCategoria para integrar la Pila**

El agente diseno el patron de intercepcion sin modificar el
app.js original: guarda la referencia a la funcion original y
la reemplaza con una nueva que llama a push antes de filtrar.

---

## Agente 2 — Desarrollador del Chatbot

| Atributo | Detalle |
|----------|---------|
| Herramienta | Claude Sonnet 4.6 (claude.ai) |
| Rol asignado | Implementador del chatbot sin API key |
| Etapa del proyecto | Nueva funcionalidad sobre el proyecto existente |
| Modo de uso | Prompt de especificacion completa y revision iterativa |

### Funciones desempenadas

**1. Disenar el motor de respuestas basado en el catalogo real**

El agente propuso usar expresiones regulares para detectar
intenciones en el texto del usuario y responder con datos reales
del arreglo zapatos del app.js. Esto permite un chatbot
completamente funcional sin depender de ninguna API externa.

**2. Cubrir todos los casos de uso del catalogo**

El agente mapeo 12 intenciones: saludos, precio minimo, precio
maximo, cada categoria, color especifico, novedades, mejor
calificados, rango de precio, busqueda por nombre, cantidad
total, envios y despedidas. Cada intencion consulta el arreglo
zapatos en tiempo real sin llamadas externas.

**3. Construir la interfaz flotante del chatbot**

El agente diseno el boton flotante que abre y cierra el chat
con animacion. Implemento burbujas diferenciadas para bot y
usuario, el indicador de escritura con tres puntos animados
y el badge de notificacion cuando llega un mensaje con el
chat cerrado.

**4. Implementar los chips de preguntas rapidas**

El agente agrego cuatro botones de acceso rapido que abren
el chat automaticamente y envian la pregunta seleccionada.
Esto permite demostrar el chatbot en accion durante la
sustentacion sin necesidad de escribir nada.

**5. Simular un delay natural de respuesta**

El agente implemento un timeout de 600 a 1000 ms aleatorio
antes de mostrar la respuesta con animacion de puntos de
escritura. Esto hace que la interaccion se sienta natural.

---

## Agente 3 — Redactor de Problematica y Documentacion

| Atributo | Detalle |
|----------|---------|
| Herramienta | Claude Sonnet 4.6 (claude.ai) |
| Rol asignado | Redactor de la seccion problematica y documentacion |
| Etapa del proyecto | Contenido academico y justificacion del proyecto |
| Modo de uso | Solicitud estructurada por secciones del rubric |

### Funciones desempenadas

**1. Definir la problematica central del proyecto**

El agente identifico que el proyecto original era una tienda
funcional pero sin justificacion academica. Formulo la
problematica: el 67% de compradores de calzado online devuelven
su compra por falta de orientacion, conectando el problema
directamente con la solucion del chatbot.

**2. Disenar la seccion visual de la problematica**

El agente construyo la seccion oscura con tres tarjetas que
explican el problema, la consecuencia y la solucion propuesta.
Esta seccion da contexto al evaluador antes de ver el producto.

**3. Actualizar la comunicacion del hero**

El agente modifico la descripcion del hero para mencionar el
asistente inteligente y cambio el item de la banda de confianza
a Asesor virtual 24/7, conectando la propuesta de valor de la
tienda con la solucion tecnologica implementada.

**4. Redactar el AGENTS.md y el README**

El agente produjo la documentacion completa del repositorio
explicando las dos estructuras de datos (Pila y Cola), sus
operaciones y como se integran al proyecto, con el formato
exigido por el rubric del curso.

---

## Reflexion del estudiante

El proyecto original tenia buena interfaz pero le faltaban dos
cosas esenciales: una razon de existir (problematica) y una
estructura de datos formal. Con la ayuda de los tres agentes,
el proyecto paso de ser una tienda estatica a una plataforma
que resuelve un problema real de e-commerce.

Lo mas valioso no fue el codigo generado, sino entender por que
se usa una Pila y no una Cola para el historial de navegacion,
y por que un chatbot con reglas locales puede ser mas adecuado
que uno con API externa cuando no se controla la infraestructura.

---

*Proyecto Final — Herramientas de Inteligencia Artificial
Universidad Cooperativa de Colombia, 2025.*
