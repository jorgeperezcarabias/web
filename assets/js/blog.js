/* blog.js — RedAgraria */

const blogGrid    = document.getElementById('blog-grid');
const filterBar   = document.getElementById('filter-bar');
const overlay     = document.getElementById('article-overlay');
const articleContent = document.getElementById('article-content');
const closeBtn    = document.getElementById('article-close');

let todosLosArticulos = [];
let categoriaActiva   = 'todos';

// ── Cargar artículos desde JSON ────────────────────────
async function cargarArticulos() {
  try {
    const res  = await fetch('assets/data/blog.json');
    if (!res.ok) throw new Error('No se pudo cargar el blog');
    todosLosArticulos = await res.json();
    renderArticulos(todosLosArticulos);
  } catch (err) {
    blogGrid.innerHTML = `
      <div class="blog-empty">
        <p>📡</p>
        <p>No se pudieron cargar los artículos. Inténtalo de nuevo.</p>
      </div>`;
    console.error('Error cargando blog.json:', err);
  }
}

// ── Formatear fecha en español ─────────────────────────
function formatearFecha(iso) {
  const [y, m, d] = iso.split('-');
  const meses = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  return `${parseInt(d)} ${meses[parseInt(m) - 1]}. ${y}`;
}

// ── Renderizar grid de cards ───────────────────────────
function renderArticulos(articulos) {
  if (!articulos.length) {
    blogGrid.innerHTML = `
      <div class="blog-empty">
        <p>🌾</p>
        <p>No hay artículos en esta categoría todavía.</p>
      </div>`;
    return;
  }

  blogGrid.innerHTML = articulos.map(art => `
    <article
      class="blog-card anim-ready ${art.destacado ? 'blog-card--destacado' : ''}"
      data-id="${art.id}"
      tabindex="0"
      role="button"
      aria-label="Leer artículo: ${art.titulo}"
    >
      <div class="blog-card__thumb">
        ${art.destacado ? '<span class="blog-card__destacado-badge">Destacado</span>' : ''}
        <span aria-hidden="true">${art.imagen_emoji}</span>
      </div>
      <div class="blog-card__body">
        <div class="blog-card__meta">
          <span class="blog-card__cat">${art.categoria}</span>
          <time class="blog-card__fecha" datetime="${art.fecha}">${formatearFecha(art.fecha)}</time>
        </div>
        <h2 class="blog-card__titulo">${art.titulo}</h2>
        <p class="blog-card__resumen">${art.resumen}</p>
        <span class="blog-card__leer" aria-hidden="true">Leer más →</span>
      </div>
    </article>
  `).join('');

  // Animación de entrada
  requestAnimationFrame(() => {
    blogGrid.querySelectorAll('.anim-ready').forEach((el, i) => {
      setTimeout(() => el.classList.add('anim-visible'), i * 80);
    });
  });

  // Eventos click y teclado en cada card
  blogGrid.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click',   () => abrirArticulo(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        abrirArticulo(card.dataset.id);
      }
    });
  });
}

// ── Filtros de categoría ───────────────────────────────
filterBar.addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  // Actualizar estado visual
  filterBar.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('filter-btn--active');
    b.setAttribute('aria-selected', 'false');
  });
  btn.classList.add('filter-btn--active');
  btn.setAttribute('aria-selected', 'true');

  categoriaActiva = btn.dataset.cat;
  const filtrados = categoriaActiva === 'todos'
    ? todosLosArticulos
    : todosLosArticulos.filter(a => a.categoria === categoriaActiva);

  renderArticulos(filtrados);
});

// ── Abrir artículo completo ────────────────────────────
function abrirArticulo(id) {
  const art = todosLosArticulos.find(a => a.id === id);
  if (!art) return;

  articleContent.innerHTML = `
    <span class="art-emoji" aria-hidden="true">${art.imagen_emoji}</span>
    <div class="art-meta">
      <span class="art-cat">${art.categoria}</span>
      <time class="art-fecha" datetime="${art.fecha}">${formatearFecha(art.fecha)}</time>
    </div>
    <h2 id="article-title">${art.titulo}</h2>
    ${art.contenido.map(p => `<p>${p}</p>`).join('')}
  `;

  overlay.hidden = false;
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

// ── Cerrar artículo ────────────────────────────────────
function cerrarArticulo() {
  overlay.hidden = true;
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', cerrarArticulo);

// Cerrar con Escape o clic en el fondo
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !overlay.hidden) cerrarArticulo();
});
overlay.addEventListener('click', e => {
  if (e.target === overlay) cerrarArticulo();
});

// ── Init ───────────────────────────────────────────────
cargarArticulos();
