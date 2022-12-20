import "./components/button/index.js";
import "./components/input/index.js";
import _sfc_main from "./components/button/button.vue_vue_type_script_setup_true_lang.js";
import { default as default2 } from "./components/button/button.vue_vue_type_script_setup_true_lang.js";
import LInput from "./components/input/input.js";
import { default as default3 } from "./components/input/input.js";
const components = [_sfc_main, LInput];
const install = (app) => {
  components.map((component) => app.component(component.name, component));
};
const index = {
  install
};
export {
  default2 as LButton,
  default3 as LInput,
  index as default
};
