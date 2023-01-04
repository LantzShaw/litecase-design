# vite typescript 组件库参考

https://github.com/qddidi/kitty-ui
https://www.cnblogs.com/zdsdididi/p/16460802.html

**warning ../../../package.json: No license field**
删除外层的 package.json & yarn.lock
https://github.com/yarnpkg/yarn/issues/3821

**如何把 public 目录在打包时忽略**

**vite 打包体积优化**
https://blog.csdn.net/blueblueskyhua/article/details/120852266?utm_term=vite%20%E5%BF%BD%E7%95%A5%E6%89%93%E5%8C%85&utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduweb~default-3-120852266&spm=3001.4430

**如何实现既可以全部引入，又可以按需引入**
按需入需要 babel-plugin-import 吗

**怎么生成 d.ts 文件**

**关于 interface 报错**

```vue
<template>
  <button>{{ label }}</button>
</template>

<script lang="ts">
interface Props {
  label?: string;
}
</script>

<script lang="ts" setup>
import type { Props } from './button';

// 不能直接在这写interface，会报错，需要写在上面的script中 或者加上export

defineOptions({
  name: 'LButton'
});

const props = withDefaults(defineProps<Props>(), {
  label: 'Button'
});

// 也可以使用这种方式
// const props = withDefaults(defineProps<{label?: string}>(), {
//   label: 'Button'
// });
</script>
```

备份 `Button.vue`

```vue
<template>
  <button>{{ a }}</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// import type { ButtonProps } from './button.d';

// import { ButtonProps } from './button';

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

// const props = withDefaults(defineProps<ButtonProps>(), {});
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
```

## bugs

#### `npm run build`时， `.vu`e 报错变量 cannot find name xxxx , 也就是无法编译插值中的变量

```vue
<!-- TODO: 无法编译 a 变量 -->
<template>
  <button>{{ a }}</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import type { Props } from './button';

const a = ref('button');

defineOptions({
  name: 'LButton'
});

const props = withDefaults(defineProps<Props>(), {
  label: 'Button'
});
</script>
```

**问题原因是**: vue-tsc 版本未更新的问题 将 vue-tsc 更新到最新

#### 无法`import type { Iprops } from './types';`

问题描述:

```sh
Error: [@vue/compiler-sfc] type argument passed to defineProps() must be a literal type, or a reference to an interface or literal type.
```

问题解决:

由于 vue3 暂时不支持外部引入类型 ， 将在 vue@3.3版本之后支持。目前可以使用参照一下方式，引入外部类型

```sh
https://github.com/wheatjs/vite-plugin-vue-type-imports
https://github.com/sxzz/unplugin-vue-macros
And I personally will try to migrate the logic of Vue Macros into Vue core.
https://github.com/liulinboyi/unplugin-vue-import-props
```

参考文章: https://github.com/vuejs/core/issues/4294
