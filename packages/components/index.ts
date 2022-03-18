import { App } from 'vue';

import Button from './button';

const components = [Button];

const install = (app: App): void => {
  components.map((component) => app.component(component.name, component));
};

export default {
  install
};
