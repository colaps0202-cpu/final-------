// ================================================================
// CATALOGO DE ZAPATOS — Datos que alimentan el chatbot
// ================================================================
const zapatos = [
  {
    id: 1,
    nombre: "Sprint Pro Air",
    categoria: "Deportivo",
    color: "Negro",
    precio: 1099,
    calificacion: 4.9,
    nuevo: true,
    imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=75",
    descripcion: "Zapatilla deportiva de alto rendimiento con tecnología de amortiguación avanzada. Ideal para correr en cualquier superficie."
  },
  {
    id: 2,
    nombre: "Urban Walker",
    categoria: "Casual",
    color: "Blanco",
    precio: 849,
    calificacion: 4.6,
    nuevo: false,
    imagen: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=75",
    descripcion: "Sneaker casual versátil para uso diario. Combina comodidad y estilo urbano."
  },
  {
    id: 3,
    nombre: "Executive Stride",
    categoria: "Formal",
    color: "Negro",
    precio: 1299,
    calificacion: 4.8,
    nuevo: true,
    imagen: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=75",
    descripcion: "Zapato formal ejecutivo en cuero genuino. Perfecto para reuniones y ambientes corporativos."
  },
  {
    id: 4,
    nombre: "Beach Comfort",
    categoria: "Sandalia",
    color: "Azul",
    precio: 599,
    calificacion: 4.4,
    nuevo: false,
    imagen: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&q=75",
    descripcion: "Sandalia cómoda para playa y piscina. Material resistente al agua."
  },
  {
    id: 5,
    nombre: "Trail Runner X",
    categoria: "Deportivo",
    color: "Gris",
    precio: 1199,
    calificacion: 4.7,
    nuevo: true,
    imagen: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=75",
    descripcion: "Especializado para correr en montaña. Suela con excelente agarre en terrenos irregulares."
  },
  {
    id: 6,
    nombre: "Casual Flex",
    categoria: "Casual",
    color: "Cafe",
    precio: 899,
    calificacion: 4.5,
    nuevo: false,
    imagen: "https://images.unsplash.com/photo-1478186000828-f21db88c2d7d?w=600&q=75",
    descripcion: "Zapato casual con cuero suave. Ideal para salidas informales."
  },
  {
    id: 7,
    nombre: "Oxford Elegance",
    categoria: "Formal",
    color: "Cafe",
    precio: 1399,
    calificacion: 4.9,
    nuevo: true,
    imagen: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=75",
    descripcion: "Oxford clásico en cuero premium. El zapato formal por excelencia."
  },
  {
    id: 8,
    nombre: "Gym Master",
    categoria: "Deportivo",
    color: "Blanco",
    precio: 949,
    calificacion: 4.6,
    nuevo: false,
    imagen: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=75",
    descripcion: "Zapatilla de entrenamiento en el gimnasio. Soporte lateral reforzado."
  },
  {
    id: 9,
    nombre: "Summer Slide",
    categoria: "Sandalia",
    color: "Negro",
    precio: 549,
    calificacion: 4.3,
    nuevo: false,
    imagen: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=600&q=75",
    descripcion: "Sandalia deslizable para casa y playa. Ultra cómoda."
  },
  {
    id: 10,
    nombre: "Street Style",
    categoria: "Casual",
    color: "Gris",
    precio: 1049,
    calificacion: 4.7,
    nuevo: true,
    imagen: "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?w=600&q=75",
    descripcion: "Sneaker moderno con diseño minimalista. Perfecto para cualquier outfit casual."
  },
  {
    id: 11,
    nombre: "Business Formal",
    categoria: "Formal",
    color: "Gris",
    precio: 1249,
    calificacion: 4.6,
    nuevo: false,
    imagen: "https://images.unsplash.com/photo-1631984564919-1f6c8f8c4e71?w=600&q=75",
    descripcion: "Zapato de negocios versátil. Compatible con trajes grises y azules."
  },
  {
    id: 12,
    nombre: "Comfort Plus",
    categoria: "Casual",
    color: "Azul",
    precio: 799,
    calificacion: 4.8,
    nuevo: true,
    imagen: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=75",
    descripcion: "Zapatilla ultra cómoda con tecnología de alivio plantar. Ideal para caminar todo el día."
  },
  {
    id: 13,
    nombre: "Sandal Pro",
    categoria: "Sandalia",
    color: "Cafe",
    precio: 679,
    calificacion: 4.5,
    nuevo: false,
    imagen: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=600&q=75",
    descripcion: "Sandalia deportiva con cierre seguro. Excelente para actividades acuáticas."
  },
  {
    id: 14,
    nombre: "Lounge Comfort",
    categoria: "Casual",
    color: "Blanco",
    precio: 749,
    calificacion: 4.4,
    nuevo: false,
    imagen: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=75",
    descripcion: "Zapato tipo loafer casual. Comodidad máxima sin sacrificar estilo."
  },
  {
    id: 15,
    nombre: "Marathon Elite",
    categoria: "Deportivo",
    color: "Azul",
    precio: 1699,
    calificacion: 4.9,
    nuevo: true,
    imagen: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=75",
    descripcion: "Zapatilla premium para maratones. Tecnología de propulsión avanzada."
  },
  {
    id: 16,
    nombre: "Formal Comfort",
    categoria: "Formal",
    color: "Negro",
    precio: 1149,
    calificacion: 4.7,
    nuevo: false,
    imagen: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=75",
    descripcion: "Zapato formal con suela cómoda. Ideal para jornadas laborales largas."
  }
];

// ================================================================
// ESTRUCTURA DE DATOS: PILA (Stack) — ÚLTIMOS VISTOS
// Guarda los 5 últimos zapatos que el usuario visualizó en detalle.
// LIFO: el último visto es el primero en la pila.
// ================================================================
const MAX_PILA_VISTOS = 5;
let pilaUltimosVistos = [];

// PUSH: agrega un zapato a la pila (sin duplicados)
function pushUltimosVistos(id) {
  // Evitar duplicados: si el zapato ya está, no agregar
  if (pilaUltimosVistos.some(z => z.id === id)) return;
  
  // Si la pila está llena, sacar el más antiguo (pop)
  if (pilaUltimosVistos.length >= MAX_PILA_VISTOS) {
    pilaUltimosVistos.shift(); // Quita el primero (más antiguo)
  }
  
  // Agregar el nuevo zapato al final
  const zapato = zapatos.find(z => z.id === id);
  pilaUltimosVistos.push(zapato);
  
  // Actualizar visualización
  renderHistorialPanel();
  renderUltimosVistos();
}

// Actualiza el panel lateral mostrando los últimos vistos
function renderHistorialPanel() {
  const lista = document.getElementById('historial-lista');
  if (!lista) return;
  
  if (pilaUltimosVistos.length === 0) {
    lista.innerHTML = '<span class="historial-vacio">Sin historial aun</span>';
    return;
  }
  
  // Mostrar de más reciente a más antiguo (invertido)
  lista.innerHTML = pilaUltimosVistos.slice().reverse().map((zapato, i) => {
    return `<div class="historial-item">${i === 0 ? '▶' : '-'} ${zapato.nombre}</div>`;
  }).join('');
}

// Renderiza la sección "Vistos recientemente" en la página
function renderUltimosVistos() {
  const seccion = document.getElementById('seccion-vistos-recientemente');
  if (!seccion) return;
  
  if (pilaUltimosVistos.length === 0) {
    seccion.classList.add('oculto');
    return;
  }
  
  seccion.classList.remove('oculto');
  
  const grid = seccion.querySelector('.vistos-grid');
  grid.innerHTML = pilaUltimosVistos.map(z => `
    <div class="producto-card">
      <div class="producto-card__imagen">
        <img src="${z.imagen}" alt="${z.nombre}"/>
        ${z.nuevo ? '<span class="badge-nuevo">Nuevo</span>' : ''}
      </div>
      <div class="producto-card__info">
        <h3 class="producto-card__nombre">${z.nombre}</h3>
        <p class="producto-card__categoria">${z.categoria} • ${z.color}</p>
        <div class="producto-card__calificacion">
          <span class="estrellas">${'★'.repeat(Math.round(z.calificacion))}${'☆'.repeat(5 - Math.round(z.calificacion))}</span>
          <span class="valor">${z.calificacion}/5</span>
        </div>
        <p class="producto-card__descripcion">${z.descripcion}</p>
        <div class="producto-card__pie">
          <span class="precio">$${z.precio.toLocaleString()}</span>
          <button class="btn-agregar" onclick="agregarAlCarrito(${z.id})">Agregar</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ================================================================
// FUNCIONES DEL CATALOGO
// ================================================================

// Renderiza el catalogo completo
function renderizar() {
  let filtrados = zapatos;
  
  const categoria = document.getElementById('filtro-categoria').value;
  const color = document.getElementById('filtro-color').value;
  const texto = document.getElementById('buscador').value.toLowerCase();
  const orden = document.getElementById('orden').value;

  if (categoria) filtrados = filtrados.filter(z => z.categoria === categoria);
  if (color) filtrados = filtrados.filter(z => z.color === color);
  if (texto) filtrados = filtrados.filter(z => z.nombre.toLowerCase().includes(texto));

  if (orden === 'precioAsc') filtrados.sort((a, b) => a.precio - b.precio);
  if (orden === 'precioDesc') filtrados.sort((a, b) => b.precio - a.precio);
  if (orden === 'recomendado') filtrados.sort((a, b) => b.calificacion - a.calificacion);

  const catalogo = document.getElementById('catalogo');
  const sinResultados = document.getElementById('sin-resultados');
  const contador = document.getElementById('contador');
  const filtrosActivos = document.getElementById('filtros-activos');

  if (filtrados.length === 0) {
    catalogo.innerHTML = '';
    sinResultados.classList.remove('oculto');
  } else {
    sinResultados.classList.add('oculto');
    catalogo.innerHTML = filtrados.map(z => `
      <div class="producto-card">
        <div class="producto-card__imagen">
          <img src="${z.imagen}" alt="${z.nombre}"/>
          ${z.nuevo ? '<span class="badge-nuevo">Nuevo</span>' : ''}
        </div>
        <div class="producto-card__info">
          <h3 class="producto-card__nombre">${z.nombre}</h3>
          <p class="producto-card__categoria">${z.categoria} • ${z.color}</p>
          <div class="producto-card__calificacion">
            <span class="estrellas">${'★'.repeat(Math.round(z.calificacion))}${'☆'.repeat(5 - Math.round(z.calificacion))}</span>
            <span class="valor">${z.calificacion}/5</span>
          </div>
          <p class="producto-card__descripcion">${z.descripcion}</p>
          <div class="producto-card__pie">
            <span class="precio">$${z.precio.toLocaleString()}</span>
            <button class="btn-agregar" onclick="agregarAlCarrito(${z.id})">Agregar</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  contador.textContent = filtrados.length === 1 ? '1 resultado' : filtrados.length + ' resultados';

  let tags = [];
  if (categoria) tags.push(categoria);
  if (color) tags.push(color);
  if (texto) tags.push(`Búsqueda: "${texto}"`);

  filtrosActivos.innerHTML = tags.map(tag => `<span class="filtro-tag">${tag}</span>`).join('');
}

// Filtra por categoría
function filtrarPorCategoria(cat) {
  document.getElementById('filtro-categoria').value = cat;
  renderizar();
  document.getElementById('catalogo-section').scrollIntoView({ behavior: 'smooth' });
}

// Limpia todos los filtros
function limpiarFiltros() {
  document.getElementById('buscador').value = '';
  document.getElementById('filtro-categoria').value = '';
  document.getElementById('filtro-color').value = '';
  document.getElementById('orden').value = 'recomendado';
  renderizar();
}

// ================================================================
// CARRITO DE COMPRAS
// ================================================================
let carrito = [];

function agregarAlCarrito(id) {
  const zapato = zapatos.find(z => z.id === id);
  const item = carrito.find(c => c.id === id);
  
  if (item) {
    item.cantidad += 1;
  } else {
    carrito.push({ ...zapato, cantidad: 1 });
  }
  
  actualizarCarrito();
  mostrarToast('Agregado: ' + zapato.nombre);
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(c => c.id !== id);
  actualizarCarrito();
}

function actualizarCarrito() {
  const count = carrito.reduce((sum, c) => sum + c.cantidad, 0);
  document.getElementById('carrito-count').textContent = count;

  const carritoItems = document.getElementById('carrito-items');
  if (carrito.length === 0) {
    carritoItems.innerHTML = '<p style="padding:2rem;text-align:center;color:#9ca3af">Tu carrito está vacío</p>';
    document.getElementById('carrito-total').textContent = '$0.00';
    return;
  }

  carritoItems.innerHTML = carrito.map(item => `
    <div class="carrito-item">
      <img src="${item.imagen}" alt="${item.nombre}" class="carrito-item__imagen"/>
      <div class="carrito-item__info">
        <h4>${item.nombre}</h4>
        <p class="carrito-item__precio">$${item.precio.toLocaleString()}</p>
      </div>
      <div class="carrito-item__cantidad">
        <button onclick="cambiarCantidad(${item.id}, -1)">-</button>
        <span>${item.cantidad}</span>
        <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
      </div>
      <button class="carrito-item__eliminar" onclick="eliminarDelCarrito(${item.id})">✕</button>
    </div>
  `).join('');

  const total = carrito.reduce((sum, c) => sum + (c.precio * c.cantidad), 0);
  document.getElementById('carrito-total').textContent = '$' + total.toLocaleString();
}

function cambiarCantidad(id, cambio) {
  const item = carrito.find(c => c.id === id);
  if (item) {
    item.cantidad = Math.max(1, item.cantidad + cambio);
    actualizarCarrito();
  }
}

// ================================================================
// MODAL DE PRODUCTO
// ================================================================
function abrirModal(id) {
  const zapato = zapatos.find(z => z.id === id);
  const modal = document.getElementById('modal');
  const contenido = document.getElementById('modal-contenido');

  // Guardar en la pila de últimos vistos
  pushUltimosVistos(id);

  contenido.innerHTML = `
    <div class="modal__producto">
      <img src="${zapato.imagen}" alt="${zapato.nombre}" class="modal__imagen"/>
      <div class="modal__datos">
        <h2>${zapato.nombre}</h2>
        <p class="modal__categoria">${zapato.categoria} • ${zapato.color}</p>
        <div class="modal__calificacion">
          <span class="estrellas">${'★'.repeat(Math.round(zapato.calificacion))}${'☆'.repeat(5 - Math.round(zapato.calificacion))}</span>
          <span>${zapato.calificacion}/5</span>
        </div>
        <p class="modal__descripcion">${zapato.descripcion}</p>
        <div class="modal__precio">
          <span class="precio-grande">$${zapato.precio.toLocaleString()}</span>
          <button class="btn btn--primario" onclick="agregarAlCarrito(${zapato.id}); cerrarModal()">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('oculto');
}

function cerrarModal() {
  document.getElementById('modal').classList.add('oculto');
}

document.getElementById('modal-cerrar')?.addEventListener('click', cerrarModal);
document.getElementById('modal-backdrop')?.addEventListener('click', cerrarModal);

// ================================================================
// CARRITO LATERAL
// ================================================================
const btnCarrito = document.getElementById('btn-carrito');
const panelCarrito = document.getElementById('panel-carrito');
const cerrarCarrito = document.getElementById('cerrar-carrito');
const carritoBg = document.getElementById('carrito-backdrop');

btnCarrito?.addEventListener('click', function() {
  panelCarrito.classList.remove('oculto');
});

cerrarCarrito?.addEventListener('click', function() {
  panelCarrito.classList.add('oculto');
});

carritoBg?.addEventListener('click', function() {
  panelCarrito.classList.add('oculto');
});

// ================================================================
// TOAST (notificación)
// ================================================================
function mostrarToast(mensaje) {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toast-msg');
  msg.textContent = mensaje;
  toast.classList.remove('oculto');
  setTimeout(() => toast.classList.add('oculto'), 3000);
}

// ================================================================
// EVENT LISTENERS
// ================================================================
document.getElementById('buscador')?.addEventListener('input', renderizar);
document.getElementById('filtro-categoria')?.addEventListener('change', renderizar);
document.getElementById('filtro-color')?.addEventListener('change', renderizar);
document.getElementById('orden')?.addEventListener('change', renderizar);
document.getElementById('btn-limpiar')?.addEventListener('click', limpiarFiltros);

// Renderizar al cargar
document.addEventListener('DOMContentLoaded', renderizar);
