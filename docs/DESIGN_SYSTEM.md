# Design System — Técnica 3 / 2027

Estado: propuesta inicial para revisión. Referencia normativa: AGENTS.md.
Implementación base: design-system.css (aún no enlazado en las páginas).

## Identidad
Tecnológica, institucional y humana. Base clara, azul profundo institucional, acento petróleo y verde menta puntual. Sin degradados, sombras ni transparencias que dificulten lectura. Fotografías reales autorizadas.

## Tokens
| Uso | Valor |
|---|---|
| Texto principal | #10233c |
| Texto secundario | #455b70 |
| Azul institucional | #193568 |
| Acento petróleo | #087e87 |
| Menta sobre fondo oscuro | #a1e8ce |
| Fondo | #f5f7fa |
| Superficie | #ffffff |
| Bordes | #cbd5e1 |

Tipografía de sistema, sin solicitudes de fuentes nuevas. Títulos fluidos mediante clamp(), cuerpo base 1rem, interlineado recomendado 1.6. Espaciado de 8, 16, 24 y 32 px; secciones con margen adaptable. Radio de tarjetas 20 px; botones tipo píldora. Ancho de contenido máximo 76rem. La paleta es provisional hasta contrastar con el escudo y fotografías reales.

## Componentes
- Navegación: marca institucional, accesos directos y menú móvil usable sin JS.
- Hero: título, especialidad, mensaje breve, dos acciones como máximo, fotografía institucional; no depender del texto sobre fotos.
- Botones: principal azul, variante ligera translúcida sobre foto con fondo oscuro suficiente; foco visible y área mínima de 44 px.
- Bento Grid: tarjetas con tamaños según importancia, no decoración; una columna en móvil, dos o más cuando haya espacio.
- Avisos: mantener fechas y acceso inmediato; carrusel circular con navegación manual y pausa.
- Equipo: fotografías, nombres y roles existentes; desplazamiento circular sin perder controles accesibles.
- Contacto: formulario etiquetado, mapa con título, enlaces y dirección; conservar endpoint existente.
- Footer: identidad institucional, navegación y contacto; iconos locales o texto.

## Composición propuesta de inicio
1. Cabecera compacta y navegación.
2. Hero tecnológico con fotografía real y accesos a formación y avisos.
3. Avisos para familias y Expo Técnica, con prioridad a información vigente.
4. Formación informática y competencias mediante Bento Grid.
5. Estructura curricular, accesible y legible; conservar materias y horas.
6. Equipo de conducción.
7. Contacto y pie institucional.

## Implementación
Usar tokens y clases t3-* de design-system.css, migrar componentes gradualmente y retirar estilos sustituidos para evitar duplicación. Mantener HTML semántico y CSS/JS separados. No introducir dependencias. Revisar fuentes e iconos externos existentes antes de retirarlos. No modificar rutas ni integraciones sin necesidad.

## Validación pendiente
Revisión visual con fotografías reales; contraste WCAG AA en estados normales, hover y foco; navegación por teclado; reducción de movimiento; 320/390/768/1280/1440 px; sin JS; pruebas de regresión de avisos, equipo, navegación, formulario y SEO. No se declara cumplimiento hasta ejecutar las pruebas.
