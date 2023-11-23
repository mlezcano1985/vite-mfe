import { defineCustomElement } from "vue";
import Counter from "./components/Counter.vue";

const wc = new Map([["remote-vue-counter", defineCustomElement(Counter)]]);

export default function register() {
  wc.forEach((el, name) => {
    if (!window.customElements.get("name")) {
      window.customElements.define(name, el);
    }
  });
}
