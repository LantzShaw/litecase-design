<template>
  <button>{{ a }}</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { ButtonProps } from './button';

// NOTE: 暂不支持外部引入
// import type { Props } from './data.d';

// NOTE: type不要加
// type Props = {
//   label?: string;
// };

// NOTE: interface需要加export
// export interface Props {
//   label?: string;
// }

const a = ref('button');

defineOptions({
  name: 'LButton'
});

const props = withDefaults(defineProps<ButtonProps>(), {});
</script>

<!-- <template>
  <button>{{ a }}</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'l-button',
  setup(props) {
    const a = ref('button');

    return { a };
  }
});
</script> -->
