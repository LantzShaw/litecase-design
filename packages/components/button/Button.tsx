import { defineComponent } from 'vue';

// 这种方式无法在.d.ts文件中使用 不然会报错
// 因为不能声明变量
// export const buttonType = [
//   'primary',
//   'success',
//   'info',
//   'warning',
//   'danger',
//   'text'
// ] as const;

export default defineComponent({
  name: 'l-button',
  props: {},
  setup(props, { slots, emit, attrs }) {
    return () => {
      return <button>Click Me</button>;
    };
  }
});
