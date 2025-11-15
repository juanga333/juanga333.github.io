# ZeroSurface Security – Web corporativa + ZeroSurface Academy

Este repositorio contiene la web estática de **ZeroSurface Security** y **ZeroSurface Academy**, centrada en:

- Auditorías de aplicaciones (web, móvil, APIs) y revisión de código
- Pentesting sobre entornos cloud, perímetro y WiFi
- Ingeniería social (phishing, simulaciones) controlada
- Análisis forense digital y reconstrucción de incidentes
- ZeroSurface Academy (formación práctica en forense y ciberseguridad)
- Blog técnico orientado a procedimientos y casos reales

La estética y los colores siguen la línea de los logos de ZeroSurface Security y ZeroSurface Academy
(azules con fondo oscuro y halo de luz).

## Estructura

Archivos principales en la raíz:

- `index.html` – Página de inicio (ZeroSurface Security).
- `servicios.html` – Detalle de los servicios.
- `blog.html` – Índice del blog técnico.
- `recursos.html` – ZeroSurface Academy (curso y formación).
- `sobre.html` – Información sobre ZeroSurface y sobre Juan Gabriel Ruiz Fernández.
- `contacto.html` – Formulario y datos de contacto.
- `aviso-legal.html`, `privacidad.html`, `cookies.html` – Páginas legales.
- `style.css` – Estilos comunes.

Carpeta `blog/`:

- `plantilla-post.html` – Plantilla para crear nuevas entradas.
- `adquisicion-en-frio-principios-basicos.html` – Ejemplo de post.

## Logos

Guarda tus logos en la carpeta `img/` con estos nombres:

- `img/zerosurface-security-logo.png` – Logo de ZeroSurface Security sin fondo.
- `img/zerosurface-academy-logo.png` – Logo de ZeroSurface Academy sin fondo.

Si los ficheros tienen otro nombre, actualiza las rutas de imagen en `index.html` y `recursos.html`.

## Uso en local

Al ser una web estática, basta con abrir `index.html` en el navegador o servir el directorio con un servidor simple:

```bash
python -m http.server 8000
# y abrir http://localhost:8000
```

## Despliegue con GitHub Pages

Configuración recomendada:

- Nombre del repo: `juanga333.github.io`
- Rama: `main`
- Carpeta: `/ (root)`

GitHub Pages publicará automáticamente el contenido en el dominio configurado.

Cada vez que publiques cambios en `main`, la web se actualizará.

## Pendiente de revisar

Antes de usar la web en producción, revisa y adapta:

- Datos reales en `aviso-legal.html`, `privacidad.html` y `cookies.html`.
- Correo de contacto en `contacto.html` y páginas legales.
- Contenido de `blog.html` y entradas de la carpeta `blog/`.
- Enlace real de Gumroad en `recursos.html`.
- Rutas de imagen de los logos si usas otros nombres.
