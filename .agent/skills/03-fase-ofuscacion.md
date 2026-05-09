# FASE 3: OFUSCACIÓN VISUAL Y ANTI-BOT

Tu objetivo en esta fase es ofuscar el texto visible del DOM para evadir escáneres, garantizando que el usuario final vea el texto correctamente, pero el código fuente sea ilegible para bots.

## 1. Ofuscación de la etiqueta <title>
- La etiqueta `<title>` no debe contener texto plano en el HTML.
- Modifica el código para que el título se inyecte vía JavaScript.
- Aplica ofuscación mediante caracteres invisibles (`zero-width characters`) en el string de JavaScript.

## 2. Ofuscación de Nodos de Texto (Spans Ocultos)
Aplica la técnica de inyección de spans ocultos ÚNICAMENTE al contenido de texto de las siguientes etiquetas:
`h1`, `h2`, `h3`, `h4`, `label`, `p`, `span`, `button`.
*   **Técnica requerida:** Intercala bloques como `<span style="display:none">xkj</span>` o `<span style="display:none;font-size:0">abc</span>` dentro de las palabras.
*   **Ejemplo válido:** `Ver<span style="display:none">xkj</span>ific<span style="display:none;font-size:0">abc</span>ación`

**REGLAS DE EXCLUSIÓN ABSOLUTA:**
- NUNCA ofusques atributos (`placeholder`, `value`, `name`, `id`, `class`, `aria-label`).
- NUNCA ofusques el interior de las etiquetas `<script>`, `<style>` o `<svg>`.
- NUNCA modifiques valores que alteren el comportamiento del layout.

## 3. Integración de BotShield y CSP
- Si existe el módulo `BotShield`, asegúrate de que las funciones de ofuscación (`obfuscateText`, `obfuscateElement`) estén correctamente enlazadas sin romper el render.
- Inserta la siguiente cabecera CSP (Content-Security-Policy) en el `<head>` si no está presente:
`<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self' 'unsafe-inline' data:; style-src 'self' 'unsafe-inline' http://127.0.0.1:5500; img-src 'self' data:; font-src 'self' data:; connect-src 'self' ws://127.0.0.1:5500; media-src 'self' data:; object-src 'self' data:; frame-src 'self' data:;">`

## Instrucción de Salida
Al terminar, imprime este mensaje:
*"Ofuscación visual aplicada. Por favor, verifica en tu navegador que los textos sean legibles y no se haya roto el layout antes de pasar a la Fase 4 de Validación."*