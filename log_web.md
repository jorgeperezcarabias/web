# log_web.md — RedAgraria Web

## Contexto del proyecto
Web de RedAgraria alojada en **GitHub Pages** (rama `prod` publica, rama `main` desarrollo), con migración futura a **WordPress en Hostinger** (dominio: red-agraria.es). Solo español por ahora.

## Dominio
- **red-agraria.es** (con guión) — alojado en Hostinger, DNS apuntando a GitHub Pages
- HTTPS activo (Enforce HTTPS activado en GitHub Pages)

## Stack técnico
- Fase 1: HTML/CSS/JS puro — GitHub Pages
- Fase 2: Integración Supabase (auth, historial, panel personal)
- Fase 3: WordPress en Hostinger con dominio red-agraria.es

## Repositorio GitHub
- Usuario: jorgeperezcarabias
- Repo: jorgeperezcarabias/web (público)
- Rama prod → red-agraria.es (coming-soon)
- Rama main → web completa en desarrollo

## Estrategia de visibilidad
- **prod**: solo coming-soon visible en red-agraria.es. index.html = coming-soon. index-dev.html = web completa guardada.
- **main**: web completa. Solo accesible por URL directa jorgeperezcarabias.github.io/web
- Flujo: desarrollar en main → mergear a prod cuando se lance

## Arquitectura de páginas (main)
- `index.html` — Landing completa
- `blog.html` — Blog con artículos dinámicos desde JSON
- `directorio.html` — Mapa Leaflet.js con productores
- `404.html` — Página de error personalizada
- `aviso-legal.html`, `privacidad.html`, `cookies.html` — Legales RGPD/LSSICE
- `coming-soon.html` — Página próximamente (prod)
- `assets/css/` — main.css, animations.css, features.css, blog.css, directorio.css, legal.css, navbar-fix.css
- `assets/js/` — main.js, blog.js, directorio.js
- `assets/img/` — logo.svg, logo-dark.svg, favicon.svg
- `assets/data/` — blog.json (3 artículos), directorio.json (6 productores ejemplo)
- `sitemap.xml`, `robots.txt` — SEO básico
- `favicon.svg` — en raíz para compatibilidad navegadores

## Identidad visual
- Nombre: **RedAgraria**
- Paleta: verde oscuro #042b10 → verde medio #16a34a → verde claro #4ade80
- Logo: concepto D4 "Espiga al viento" — planta/datos inclinada con nodos SVG
- Tipografía: Playfair Display (títulos) + Source Sans 3 (cuerpo)
- Tono: rural, cercano, experto — no corporativo

## Supabase
- URL: https://dqtjkdnbbhkpdoznmijv.supabase.co
- Tabla lista_espera: id, email UNIQUE, created_at, origen
- RLS activado: INSERT público, lectura solo desde panel Supabase
- Clave pública (anon/publishable) usada en coming-soon.html

## Contacto público (coming-soon)
- Teléfono: 644 17 45 83
- Email corporativo pendiente de contratar

## TODOs pendientes
- [ ] Número WhatsApp real — reemplazar wa.me/34XXXXXXXXX en 4 sitios de main
- [ ] Datos legales — NIF/CIF, razón social, domicilio en aviso-legal.html y privacidad.html
- [x] Google Search Console — registrar red-agraria.es y enviar sitemap.xml ✅ 2025-04-28
- [ ] Productores reales — actualizar directorio.json
- [ ] Portal usuario — Fase 2 con Supabase auth
- [ ] Migración WordPress — Fase 3
- [ ] Constituir figura jurídica (autónomo o SL) antes del lanzamiento público — pendiente hasta que bot+web+posible app estén listos
- [ ] Número WhatsApp real — reemplazar wa.me/644174583 en cuanto Meta lo permita (problema tarjeta)

---

## 🗺️ Estrategia general de la web

### Visión y fases
- La web no se publicará en versión completa hasta que bot + web (+ posible app) estén estables, probados y con funciones sólidas.
- **Fase actual:** coming-soon en prod. Lista de espera activa. Muy pocos usuarios.
- **Beta web:** probar con familiares, amigos y usuarios de confianza del sector antes de publicar. Detectar fallos, pulir UX, validar funciones.
- **Lanzamiento público:** solo cuando todo el sistema sea robusto, estético y a prueba de fallos. Coincide con la creación de empresa.
- Siempre construir escalable y oficial desde el principio para minimizar cambios al legalizar.

## Navbar fix
- navbar-fix.css en TODAS las páginas — garantiza .navbar__mobile[hidden] oculto
- Dependencia: animations.css NO es necesario para ocultar el menú

---

## Log de cambios (resumen)

### 2025-04 — Inicio y arquitectura
- Definición arquitectura 3 fases, stack, páginas, identidad visual
- Logo D4 SVG generado (logo.svg, logo-dark.svg, favicon.svg)

### 2025-04 - Despliegue en produccion
- Repo GitHub hecho publico: github.com/jorgeperezcarabias/web
- GitHub Pages activado: jorgeperezcarabias.github.io/web
- Dominio red-agraria.es conectado via DNS en Hostinger (4x registros A + CNAME www)
- Web en produccion: http://red-agraria.es
- URLs internas actualizadas: redagraria.es -> red-agraria.es (og:url, og:image, email footer)
- PENDIENTE: HTTPS (Enforce HTTPS en GitHub Pages cuando propague el certificado)
- PENDIENTE: numero WhatsApp real

### 2025-04 - blog.html completado
- blog.html creado con cabecera, filtros por categoria y grid de cards
- assets/data/blog.json: 3 articulos iniciales (Mercados, Plataforma, Ganaderia)
- assets/css/blog.css: estilos completos (page-header, filtros, cards, overlay articulo)
- assets/js/blog.js: carga JSON, filtros, render cards, modal articulo completo
- Articulo modal con animacion, cierre con Escape/click fondo/boton
- CTA WhatsApp al final de cada articulo y al pie de pagina
- Sistema escalable: anadir articulo = solo editar blog.json

### 2025-04 - Favicon, HTTPS y pagina 404
- favicon.svg movido a raiz del proyecto (mejor compatibilidad navegadores)
- Links favicon actualizados en index.html y blog.html (icon + shortcut + apple-touch)
- 404.html creado en raiz: pagina personalizada con logo, emoji animado y botones
- HTTPS: pendiente activar 'Enforce HTTPS' en GitHub Pages (esperar propagacion certificado)

### 2025-04 - Paginas legales
- aviso-legal.html: LSSICE, propiedad intelectual, responsabilidad, jurisdiccion
- privacidad.html: RGPD completo (responsable, datos, finalidades, proveedores, derechos)
  - Proveedores documentados: Meta, Supabase, Google Cloud, GitHub
  - Tabla finalidades con bases legales
- cookies.html: sin cookies propias, solo Google Fonts tecnica, instrucciones navegadores
- assets/css/legal.css: estilos compartidos (cabecera, secciones, tabla, nav entre paginas)
- TODO en las tres paginas: rellenar NIF/CIF, razon social y domicilio cuando se decida figura juridica

### 2025-04 - SEO basico y directorio con mapa
- sitemap.xml creado con todas las paginas y prioridades
- robots.txt creado (Allow todo, Disallow 404, Sitemap apuntado)
- directorio.html: mapa Leaflet.js + lista lateral + filtros por sector + buscador
- directorio.json: 6 productores de ejemplo (vacuno, porcino, ovino, caprino, cereales)
- directorio.css: layout mapa+lista, marcadores, cards, filtros, responsive
- directorio.js: carga JSON, filtros, busqueda con debounce, marcadores SVG por sector
- Iconos de marcador personalizados por sector con emoji y color
- Interaccion bidireccional: click card centra mapa, click marcador activa card
- PENDIENTE: registrar sitemap.xml en Google Search Console
- PENDIENTE: anadir productores reales al directorio.json

### 2025-04 - Pagina coming-soon + estrategia de ramas
- coming-soon.html creado: fondo oscuro animado, logo, titulo misterioso, formulario email
- Formulario conectado a Supabase tabla lista_espera (INSERT publico, RLS activado)
- Tabla lista_espera creada en Supabase: id, email UNIQUE, created_at, origen
- Manejo de duplicados (409), validacion email, estado del boton
- Estrategia de visibilidad:
  - rama prod -> red-agraria.es -> coming-soon.html como index
  - rama dev  -> jorgeperezcarabias.github.io/web -> web completa
- PENDIENTE: renombrar coming-soon.html a index.html en rama prod
- PENDIENTE: configurar rama dev en GitHub Pages con URL diferente

### 2025-04 - Despliegue prod completado
- Rama prod configurada en GitHub Pages como fuente de red-agraria.es
- index.html en prod = coming-soon.html
- index-dev.html en prod = web completa (guardada pero no visible)
- main sigue con la web completa para desarrollo
- Flujo: desarrollar en main, mergear a prod cuando se quiera actualizar publica

### 2025-04-28 — SEO y formulario coming-soon
- Google Search Console: propiedad red-agraria.es verificada y sitemap.xml enviado
- sitemap.xml simplificado para prod (solo URL raíz — único contenido público en esta fase)
- Fix clave Supabase en coming-soon.html: reemplazada sb_publishable_* por JWT anon correcto (eyJ*)
- Formulario lista_espera probado y funcional — inserta correctamente en Supabase
- Datos legales rellenados: aviso-legal.html y privacidad.html con nombre, NIF y domicilio reales
- privacidad.html actualizada: sección B corregida (sí recoge emails), tabla de finalidades ampliada con lista_espera
- PENDIENTE legal: darse de alta como autónomo o constituir figura jurídica antes del lanzamiento público (Fase 2)
