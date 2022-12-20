import { defineComponent, ref, openBlock, createElementBlock, toDisplayString } from "vue";
const __default__ = defineComponent({
  name: "LButton"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    label: { default: "Button" }
  },
  setup(__props) {
    const a = ref("button");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", null, toDisplayString(a.value), 1);
    };
  }
});
export {
  _sfc_main as default
};
