import { defineComponent } from 'vue';

export default defineComponent({
  name: 'l-button',
  props: {},
  setup(props, { slots, emit, attrs }) {
    return () => {
      return <button>Click Me</button>;
    };
  }
});
