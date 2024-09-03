import state from "./state.js";
import * as el from "./elements.js";

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes; // ?? -nullish coalesing operator - verifica se o parâm. é null - se sim coloca parâm. válido no lugar do null
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0"); // preencha o começo, 2 caract., quando tiver um caract. começa com 0
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
