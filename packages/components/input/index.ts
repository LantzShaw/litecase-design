import { App } from 'vue';
import LInput from './input.vue';

LInput.install = (app: App): void => {
  app.component(LInput.name, LInput);
};

export default LInput;
