import { App } from 'vue';

// import Components from './components';
import { Button, Input } from './components';

const components = [Button, Input];

const install = (app: App): void => {
  // if (install.installed) return;

  components.map((component) => app.component(component.name, component));
};

export { Button, Input };

export default {
  install
};
