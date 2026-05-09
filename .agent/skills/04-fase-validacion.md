# FASE 4: SEGURIDAD OPERATIVA Y VALIDACIÓN

Tu objetivo en esta fase es asegurar que los cambios realizados en las fases anteriores no hayan roto la integridad del proyecto, utilizando la carpeta de respaldo como fuente de la verdad.

## 1. Comparación con el Respaldo
Si el usuario reporta que una vista se rompió tras aplicar las fases anteriores:
- Accede a la carpeta `respaldo` (que hasta ahora habías ignorado por regla global).
- Compara el archivo actual modificado con su versión original en `respaldo`.
- Identifica exactamente qué cambio estructural (tags, atributos, estilos, scripts o texto visible) causó la ruptura visual.

## 2. Restauración Quirúrgica
- La prioridad absoluta es preservar el funcionamiento, el render y la compatibilidad nativa.
- Restaura el bloque de código afectado desde el backup original.
- Rehace la modificación problemática pero esta vez aplicando un enfoque conservador (ej. sin tocar atributos adyacentes o excluyendo la ofuscación de ese nodo en particular).

## Instrucción de Salida
Genera un reporte técnico de las diferencias encontradas con el respaldo y explica qué bloque fue restaurado. Concluye el mensaje con:
*"Validación y restauración completada. Proyecto estabilizado."*