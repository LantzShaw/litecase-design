import { App } from 'vue';

// import Components from './components';
import { LButton, LInput } from './components';

const components = [LButton, LInput];

const install = (app: App): void => {
  // if (install.installed) return;

  components.map((component) => app.component(component.name, component));
};

export { LButton, LInput };

export default {
  install
};
