# ZeroSurface – Pentesting y análisis forense

Este repositorio contiene la web estática de **ZeroSurface**, centrada en:

- Evaluación de amenazas y pentesting
- Análisis forense digital y reconstrucción de incidentes
- Blog técnico y recursos (libros, guías, material práctico)

La web se sirve mediante **GitHub Pages** desde este mismo repositorio (`juanga333.github.io`).

---

## Estructura del proyecto

Archivos principales:

- `index.html` – Página de inicio (hero, resumen de servicios, experiencia y CTA).
- `servicios.html` – Detalle de servicios de pentesting y análisis forense.
- `blog.html` – Listado de artículos técnicos (de momento con contenido placeholder).
- `recursos.html` – Libros, guías y otros recursos relacionados con pentesting y forense.
- `sobre.html` – Información sobre el responsable de ZeroSurface y el enfoque de trabajo.
- `contacto.html` – Formulario de contacto y datos de correo.
- `aviso-legal.html` – Aviso legal del sitio.
- `privacidad.html` – Política de privacidad.
- `cookies.html` – Política de cookies.
- `style.css` – Hoja de estilos principal (tema oscuro, diseño responsive).

---

## Desarrollo local

Al ser una web estática, no requiere compilación ni dependencias especiales.

Puedes probarla en local simplemente abriendo `index.html` en el navegador o sirviendo
el directorio con cualquier servidor estático, por ejemplo:

```bash
# En Linux/macOS con Python 3
python -m http.server 8000
# Luego abre http://localhost:8000 en el navegador
