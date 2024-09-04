import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running"); //faz o reset da app
  timer.updateDisplay(); //faz o reset do display quando chega no 00:00
}

export function set() {
  el.minutes.setAttribute("contenteditable", true); //no click altera o valor
  el.minutes.focus();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
}
