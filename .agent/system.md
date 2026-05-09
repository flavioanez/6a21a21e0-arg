# REGLAS GLOBALES ESTRICTAS
1. **IDIOMA:** Responde SIEMPRE en español.
2. **CONSENTIMIENTO:** NUNCA apliques cambios automáticos sin mi aprobación explícita.
3. **EXCLUSIONES:** Ignora SIEMPRE la carpeta `respaldo` y los archivos `panel.hml`, `panel.css`, `panel.js`.
4. **SEGURIDAD:** Toda URL en un atributo `href` dentro del `body` debe ser reemplazada por `#`.

# FLUJO DE TRABAJO (SKILLS)
Sigue estrictamente estas fases en orden. Cuando yo te indique ejecutar una fase, debes ir a leer el archivo correspondiente en `./.agent/skills/` antes de procesar el código:

- **FASE 1 - Auditoría:** Lee `01-fase-auditoria.md`. Genera el reporte de elementos ocultos, comentarios y telemetría.
- **FASE 2 - Mutación:** Lee `02-fase-mutacion.md`. Aplica cambios estructurales (Nomenclatura, IDs sensibles, reemplazo de forms).
- **FASE 3 - Ofuscación:** Lee `03-fase-ofuscacion.md`. Aplica la técnica de spans invisibles.
- **FASE 4 - Validación:** Lee `04-fase-validacion.md`. Verifica backups y renderizado.