/* directorio.js — RedAgraria */

// ── Colores por sector ─────────────────────────────────
const SECTOR_COLORS = {
  'Vacuno':   '#16a34a',
  'Porcino':  '#dc2626',
  'Ovino':    '#ca8a04',
  'Caprino':  '#7c3aed',
  'Cereales': '#d97706',
  'default':  '#042b10'
};

const SECTOR_EMOJI = {
  'Vacuno':   '🐄',
  'Porcino':  '🐷',
  'Ovino':    '🐑',
  'Caprino':  '🐐',
  'Cereales': '🌾',
  'default':  '🏡'
};

// ── Estado ─────────────────────────────────────────────
let todosProductores = [];
let sectorActivo     = 'todos';
let busqueda         = '';
let mapaLeaflet      = null;
let marcadores       = {};   // id → marker de Leaflet
let cardActiva       = null;

// ── Init mapa ──────────────────────────────────────────
function initMapa() {
  mapaLeaflet = L.map('map', {
    center: [40.4, -3.7],
    zoom: 6,
    zoomControl: true,
    attributionControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(mapaLeaflet);
}

// ── Crear icono personalizado ──────────────────────────
function crearIcono(sector) {
  const color = SECTOR_COLORS[sector] || SECTOR_COLORS['default'];
  const emoji = SECTOR_EMOJI[sector]  || SECTOR_EMOJI['default'];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 36 44">
      <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 26 18 26S36 31.5 36 18C36 8.06 27.94 0 18 0z"
            fill="${color}" stroke="white" stroke-width="2"/>
      <text x="18" y="24" text-anchor="middle" font-size="16">${emoji}</text>
    </svg>`;
  return L.divIcon({
    html: svg,
    className: '',
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    popupAnchor: [0, -44]
  });
}

// ── Renderizar marcadores en el mapa ───────────────────
function renderMarcadores(productores) {
  // Limpiar marcadores anteriores
  Object.values(marcadores).forEach(m => mapaLeaflet.removeLayer(m));
  marcadores = {};

  productores.forEach(p => {
    const marker = L.marker([p.lat, p.lng], { icon: crearIcono(p.sector) })
      .addTo(mapaLeaflet)
      .bindPopup(`
        <div class="popup-inner">
          <span class="popup-sector">${SECTOR_EMOJI[p.sector] || ''} ${p.sector}</span>
          <div class="popup-nombre">${p.nombre}</div>
          <div class="popup-loc">📍 ${p.localidad}, ${p.provincia}</div>
          <div class="popup-desc">${p.descripcion}</div>
        </div>
      `, { maxWidth: 240 });

    marker.on('click', () => activarCard(p.id));
    marcadores[p.id] = marker;
  });
}

// ── Renderizar cards laterales ─────────────────────────
function renderCards(productores) {
  const container = document.getElementById('dir-cards');
  const contador  = document.getElementById('dir-count');

  contador.textContent = productores.length === 1
    ? '1 productor'
    : `${productores.length} productores`;

  if (!productores.length) {
    container.innerHTML = `
      <div class="dir-empty">
        <p>🌾</p>
        <p>No hay productores con ese filtro.</p>
      </div>`;
    return;
  }

  container.innerHTML = productores.map(p => `
    <div
      class="dir-card anim-ready"
      data-id="${p.id}"
      tabindex="0"
      role="button"
      aria-label="Ver ${p.nombre} en el mapa"
    >
      <div class="dir-card__top">
        <span class="dir-card__nombre">${p.nombre}</span>
        <span class="dir-card__sector">${p.sector}</span>
      </div>
      <div class="dir-card__loc">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${p.localidad}, ${p.provincia}
      </div>
      <div class="dir-card__desc">${p.descripcion}</div>
    </div>
  `).join('');

  // Animación de entrada escalonada
  requestAnimationFrame(() => {
    container.querySelectorAll('.anim-ready').forEach((el, i) => {
      setTimeout(() => el.classList.add('anim-visible'), i * 60);
    });
  });

  // Eventos de click en cards
  container.querySelectorAll('.dir-card').forEach(card => {
    card.addEventListener('click', () => activarCard(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activarCard(card.dataset.id);
      }
    });
  });
}

// ── Activar una card y centrar mapa ───────────────────
function activarCard(id) {
  const p = todosProductores.find(p => p.id === id);
  if (!p) return;

  // Desactivar card anterior
  if (cardActiva) {
    const prev = document.querySelector(`.dir-card[data-id="${cardActiva}"]`);
    if (prev) prev.classList.remove('dir-card--active');
  }

  // Activar nueva
  cardActiva = id;
  const card = document.querySelector(`.dir-card[data-id="${id}"]`);
  if (card) {
    card.classList.add('dir-card--active');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Centrar mapa y abrir popup
  mapaLeaflet.setView([p.lat, p.lng], 10, { animate: true });
  if (marcadores[id]) marcadores[id].openPopup();
}

// ── Filtrar y re-renderizar ────────────────────────────
function filtrar() {
  const termino = busqueda.toLowerCase().trim();
  const resultado = todosProductores.filter(p => {
    const matchSector = sectorActivo === 'todos' || p.sector === sectorActivo;
    const matchBusq   = !termino ||
      p.localidad.toLowerCase().includes(termino) ||
      p.provincia.toLowerCase().includes(termino) ||
      p.nombre.toLowerCase().includes(termino);
    return matchSector && matchBusq;
  });

  renderCards(resultado);
  renderMarcadores(resultado);
}

// ── Carga de datos ─────────────────────────────────────
async function cargarDirectorio() {
  try {
    const res = await fetch('assets/data/directorio.json');
    if (!res.ok) throw new Error('Error cargando directorio');
    todosProductores = await res.json();
    filtrar();
  } catch (err) {
    document.getElementById('dir-cards').innerHTML = `
      <div class="dir-empty">
        <p>📡</p>
        <p>No se pudo cargar el directorio. Inténtalo de nuevo.</p>
      </div>`;
    document.getElementById('dir-count').textContent = '0 productores';
    console.error('Error cargando directorio.json:', err);
  }
}

// ── Eventos filtros ────────────────────────────────────
document.querySelectorAll('.dir-filters .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dir-filters .filter-btn').forEach(b => {
      b.classList.remove('filter-btn--active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('filter-btn--active');
    btn.setAttribute('aria-selected', 'true');
    sectorActivo = btn.dataset.sector;
    filtrar();
  });
});

// ── Evento buscador (debounce 300ms) ───────────────────
let debounceTimer;
document.getElementById('dir-search').addEventListener('input', e => {
  busqueda = e.target.value;
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(filtrar, 300);
});

// ── Arranque ───────────────────────────────────────────
initMapa();
cargarDirectorio();
