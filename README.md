# litecase-design

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/LantzShaw/litecase-design/LICENSE) [![npm version](https://img.shields.io/npm/v/litecase-design.svg?style=flat)](https://www.npmjs.com/package/litecase-design) 

A UI component library for vue

## Installation

```sh
$ npm i litecase-design
```

## Usage

**Fully Import**

```ts
import { createApp } from 'vue'
import LitecaseDesign from 'litecase-design'

import App from './App.vue'

const app = createApp(App)

app.use(LitecaseDesign)
app.mount('#app')
```

**Manually Import**

```vue
<template>
    <l-button label="Button"></l-button>
</template>

<script lang="ts" setup>
import { LButton } from 'litecase-design'
</script>
```