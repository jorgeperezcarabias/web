# log_web.md — RedAgraria Web

## Contexto del proyecto
Web de RedAgraria alojada inicialmente en **GitHub Pages** (rama `dev` / `prod`), con migración futura a **WordPress en Hostinger** (dominio: redagraria.es). Solo español por ahora.

## Stack técnico
- Fase 1: HTML/CSS/JS puro — GitHub Pages (sin frameworks)
- Fase 2: Integración Supabase (auth, historial, panel personal)
- Fase 3: WordPress en Hostinger con dominio redagraria.es

## Arquitectura de páginas (Fase 1)
- `index.html` — Landing (Hero, Cómo funciona, Para quién es, Testimonios, CTA WhatsApp, Footer)
- `blog.html` — Blog/noticias (artículos en JSON estático)
- `directorio.html` — Mapa con Leaflet.js (datos en JSON estático)
- `bot.html` — Botón directo a WhatsApp
- `assets/css/` — Estilos
- `assets/js/` — Scripts
- `assets/img/` — Imágenes y logos
- `assets/data/` — JSON estáticos (blog, directorio)

## Identidad visual
- Nombre: **RedAgraria**
- Paleta: verde oscuro `#042b10` → verde medio `#16a34a` → verde claro `#4ade80`
- Logo: concepto D4 "Espiga al viento" — planta/datos inclinada con nodos
- Tipografía logo: Palatino (wordmark) + Trebuchet MS (tagline)
- Tono: rural, cercano, experto — no corporativo

## Archivos de logo generados
- `assets/img/logo.svg` — Versión principal horizontal (fondo claro)
- `assets/img/logo-dark.svg` — Versión oscura (fondo negro/oscuro)
- `assets/img/favicon.svg` — Icono solo (favicon, app icon)

## Estructura de carpetas creada
```
web/
├── index.html          (pendiente)
├── blog.html           (pendiente)
├── directorio.html     (pendiente)
├── bot.html            (pendiente)
├── assets/
│   ├── css/            (pendiente)
│   ├── js/             (pendiente)
│   ├── img/
│   │   ├── logo.svg        ✓
│   │   ├── logo-dark.svg   ✓
│   │   └── favicon.svg     ✓
│   └── data/           (pendiente)
└── log_web.md          ✓
```

## Decisiones de arquitectura
- HTML puro en Fase 1 para facilitar migración posterior a WP
- Leaflet.js para mapas (open source, sin coste)
- Supabase Auth diferido a Fase 2
- SVG nativo para logo (escalable, sin dependencias)

---

## Log de cambios

### 2025-04 — Inicio del proyecto web
- Definición de arquitectura completa (3 fases)
- Estructura de páginas acordada
- Identidad visual definida: logo D4 "Espiga al viento", paleta verde
- Logos SVG generados: logo.svg, logo-dark.svg, favicon.svg
- Estructura de carpetas creada en local
- Secciones landing acordadas: Hero → Cómo funciona → Para quién es → Testimonios → CTA WhatsApp → Footer

### 2025-04 - index.html v2: correcciones y nueva seccion funciones
- Chat WhatsApp mockup corregido: usuario a la derecha (verde), bot a la izquierda
- Conversacion del mockup actualizada con caso real del bot (precio cerdo + alerta)
- Hero trust badges actualizados a funciones reales del bot
- Numeros seccion 'Como funciona' con color mas visible (#a3c9a8)
- Step 2 corregido: ejemplos de preguntas reales del bot (no fumigacion/plagas)
- Step 4 actualizado: descripcion de alertas en lugar de historial
- Texto CTA corregido: eliminado 'primera consulta gratis'
- CTA hero cambiado a mensaje mas concreto sobre precio lonja
- Nueva seccion 'Funciones del bot' (id=funciones) con 6 cards basadas en log.md real:
  - Precios lonja tiempo real (Lonja Salamanca, actualiza lunes)
  - Calculo beneficio estimado (peso x rendimiento x precio lonja)
  - Alertas precio personalizadas (umbral + semanal)
  - Menus y botones interactivos
  - Lenguaje natural con IA (Gemini Flash fallback)
  - Proximas funciones (dashed, opacidad reducida)
- Seccion 'Para quien' actualizada: perfiles ajustados a capacidades reales
- Testimonios actualizados: casos de uso reales (precio, alerta, calculo)
- assets/css/features.css creado con estilos de .features y .feature-card
- Navbar y footer actualizados con enlace a #funciones
- PENDIENTE: numero WhatsApp real (Meta aun sin metodo de pago)

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
