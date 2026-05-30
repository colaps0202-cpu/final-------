# El Paso — Zapateria Premium con IA

Proyecto final de Herramientas de Inteligencia Artificial
Universidad Cooperativa de Colombia 2025

## Problematica

El 67% de los compradores online de calzado devuelven su compra
por haber elegido el modelo equivocado. Los filtros estandar no
son suficientes: el comprador necesita orientacion personalizada
en tiempo real para tomar la decision correcta.

Solucion: chatbot integrado que conoce el catalogo completo y
guia al comprador sin necesidad de API externa ni API key.

## Estructuras de Datos

### Pila (Stack) LIFO
- Guarda el historial de filtros del catalogo
- Push al cambiar filtro, Pop al presionar Volver
- Panel visual lateral muestra los estados guardados
- Maximo 5 estados en la pila

### Cola (Queue) FIFO
- Almacena el historial de conversacion del chatbot
- Maximo 10 mensajes, el mas antiguo sale primero
- Evita que el chat crezca indefinidamente en memoria

## Chatbot sin API key

Responde preguntas usando expresiones regulares y los datos
reales del arreglo zapatos definido en app.js.

Entiende: categorias, precios, colores, novedades, mejor
calificados, rangos de precio y politicas de envio.

## Archivos

- index.html  pagina principal con chatbot Pila y Cola
- app.js      catalogo carrito y filtros
- styles.css  estilos completos
- README.md   este archivo
- AGENTS.md   documentacion de los agentes de IA

## GitHub Pages

Settings Pages Branch main Save

*Proyecto Final IA Universidad Cooperativa de Colombia 2025*
