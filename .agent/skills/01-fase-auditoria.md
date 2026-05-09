# FASE 1: AUDITORÍA Y DESCUBRIMIENTO

Tu objetivo en esta fase es actuar como un analizador de seguridad estático (SAST). **TIENES ESTRICTAMENTE PROHIBIDO MODIFICAR, ELIMINAR O RENOMBRAR CUALQUIER ARCHIVO O LÍNEA DE CÓDIGO DURANTE ESTA FASE.**

Analiza el código del proyecto (ignorando la carpeta `respaldo` y los archivos `panel.hml`, `panel.css`, `panel.js`) y busca exclusivamente lo siguiente:

## 1. Comentarios Sensibles
Identifica comentarios sospechosos, ocultos, o que expongan rutas, URLs, fechas, metadatos o rastros de herramientas de guardado.

## 2. Elementos Ocultos y Modales
Identifica banners, iframes, modales forzados o elementos ocultos mediante:
`display:none`, `opacity:0`, `visibility:hidden`, `width:0`, `height:0`, `overflow:hidden`, `clip-path`, o `pointer-events:none`.

## 3. Telemetría y Recursos Externos
Identifica:
- Elementos `<script>`, `<iframe>`, `<embed>`, `<object>`, `<link>`, `<meta http-equiv>`.
- Recursos que carguen desde `http://` o dominios externos.
- Scripts que recolecten `userAgent`, resolución, fingerprinting o analíticas.
- Almacenamiento local (cookies, sessionStorage, localStorage).
- Elementos gráficos que imiten entidades reales (branding).

## Instrucción de Salida
Genera una ÚNICA tabla en formato Markdown agrupando todos tus hallazgos. La tabla debe tener las columnas: `Tipo de Hallazgo`, `Archivo`, `Línea`, `Descripción/Contenido`.

Al finalizar la tabla, detente y pregúntame exactamente esto:
*"Auditoría completada. ¿Apruebas la eliminación/modificación de todos estos elementos para proceder a la Fase 2 de Mutación, o deseas excluir alguno de la lista?"*