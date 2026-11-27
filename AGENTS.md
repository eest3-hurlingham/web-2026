# AGENTS.md — Técnica 3 Hurlingham

## Objetivo
Construir una web institucional contemporánea, tecnológica, humana y accesible, que sea ejemplo de buen desarrollo frontend. Rediseño 2027: primero inicio, después páginas internas.

## Reglas obligatorias
1. HTML5, CSS3 y JavaScript nativo. No incorporar frameworks, librerías, dependencias, tecnologías adicionales ni procesos de compilación.
2. Separación de responsabilidades: HTML para estructura, CSS para presentación y JS para comportamiento, en archivos separados. No usar estilos, scripts ni manejadores de eventos inline. Migrar los existentes cuando se intervenga el componente, preservando su funcionamiento.
3. HTML semántico: header, nav, main, section, article, footer; jerarquía coherente de encabezados; botones para acciones y enlaces para navegación.
4. Mobile First: diseño fluido, sin desplazamiento horizontal de página, verificando pantallas pequeñas y grandes.
5. Accesibilidad: objetivo WCAG 2.2 AA; teclado, foco visible, contraste, textos alternativos, etiquetas de formularios, controles de pausa y respeto a prefers-reduced-motion.
6. DRY: reutilizar componentes y evitar duplicaciones innecesarias.
7. KISS: soluciones simples, legibles y mantenibles, sin abstracciones prematuras.
8. CSS modular: variables CSS para colores, tipografía, espaciado, radios y sombras; componentes consistentes; Grid y Flexbox nativos.
9. Rendimiento y SEO: imágenes dimensionadas y optimizadas, carga diferida fuera del primer viewport, evitar saltos de diseño; preservar canonical, sitemap, robots, rutas y metadatos.
10. Progressive Enhancement: contenido y navegación esenciales utilizables sin JavaScript; JS añade mejoras sin ocultar contenido imprescindible.

## Dirección visual
- Identidad tecnológica propia, no una plantilla escolar genérica.
- Fotografías institucionales reales y autorizadas; no inventar datos ni imágenes de la escuela.
- Hero expresivo, jerarquía tipográfica, espacios amplios, composición Bento Grid cuando aporte claridad.
- Botones ligeros y transparencias con contraste suficiente; animaciones discretas y carruseles circulares accesibles, con pausa y controles.
- Conservar identidad, escudo, información institucional y accesos prioritarios para familias y estudiantes.

## Flujo Git
- Rama de trabajo desde dev; PR hacia dev. Nunca push directo a dev/main ni merge o publicación sin aprobación explícita.
- Rediseño en redesign/landing-2027. Mantener producción intacta.
- Antes de modificar, revisar código existente y documentar alcance. Preservar integraciones existentes (contacto, analítica, mapas) salvo autorización explícita para cambiarlas; no incorporar nuevos servicios.
- No inventar datos, credenciales ni destinatarios de formularios.
- Cambios pequeños y revisables; informar archivos modificados, pruebas realizadas y limitaciones.

## Criterios de aceptación
- HTML válido y semántico; CSS/JS separados; ninguna nueva dependencia.
- Comprobar navegación, enlaces, formularios sin enviar datos reales, carruseles, teclado, movimiento reducido y funcionamiento esencial sin JS.
- Revisar móvil (320 y 390 px), tablet y escritorio (1280 y 1440 px), sin desbordamientos; evaluar accesibilidad y rendimiento con herramientas disponibles.
- Preservar información, SEO y rutas existentes; comprobar preview de Vercel antes de aprobar.
- No declarar pruebas superadas si no fueron ejecutadas.

## Hoja de ruta
1. Auditoría de sitio y código.
2. Design System institucional con CSS nativo.
3. Rediseño del inicio y revisión visual.
4. Extensión a páginas internas.
5. Validación técnica, accesibilidad, rendimiento y SEO.
6. Publicación únicamente después de aprobación.
