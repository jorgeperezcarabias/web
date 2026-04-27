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
