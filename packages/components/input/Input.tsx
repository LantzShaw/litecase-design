import { defineComponent } from 'vue';

export default defineComponent({
  name: 'l-input',
  props: {},
  setup(props, { slots, emit, attrs }) {
    return () => {
      return (
        <>
          <input type="text" />
        </>
      );
    };
  }
});
