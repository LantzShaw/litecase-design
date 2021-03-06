import { App } from 'vue';
import LButton from '../button/button.vue';

LButton.install = (app: App): void => {
  app.component(LButton.name, LButton);
};

export default LButton;
