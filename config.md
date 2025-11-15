# Configuración de Dominio

Este sitio web está optimizado para funcionar independientemente del dominio donde se aloje. 

## Cambio de Dominio

Para migrar a un nuevo dominio (ej: zerosurface.es):

1. **GitHub Pages con dominio custom:**
   - Ve a Settings > Pages en tu repo de GitHub
   - En "Custom domain" escribe: `zerosurface.es` 
   - Asegúrate que tu DNS apunte a GitHub Pages:
     ```
     CNAME: username.github.io (para subdominio www)
     A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 (para dominio raíz)
     ```

2. **Hosting tradicional:**
   - Sube todos los archivos a tu hosting
   - El sitio funcionará inmediatamente sin necesidad de cambios

## URLs Relativos

Todo el sitio usa URLs relativos (`./` y `../`) que se resuelven automáticamente según el dominio donde se aloje.

## SEO Considerations

- Los meta tags og:url y canonical se ajustarán automáticamente al nuevo dominio
- El sitemap.xml también es relativo y será indexado correctamente
- Los datos estructurados (Schema.org) mantienen las referencias relativas

## Archivos Críticos

- `sitemap.xml` - Sitemap con URLs relativos
- `robots.txt` - Referencias relativas al sitemap
- Todos los `.html` - Meta tags con URLs relativos
- `style.css` - Sin dependencias de dominio

## Verificación Post-Migración

Después del cambio de dominio, verificar:
- [ ] Sitemap accesible en `tudominio.com/sitemap.xml`
- [ ] Google Search Console configurado con nuevo dominio
- [ ] Canonical URLs se resuelven correctamente
- [ ] Open Graph URLs funcionan en redes sociales
- [ ] Analytics actualizado (si aplica)