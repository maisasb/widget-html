<template>
  <div>
    <Widget v-bind="$props" />
  </div>
</template>

<script>
import Widget from "./views/Widget/Widget";
export default {
  name: "App",
  components: { Widget },
  props: {
    config: Object
  }
};
</script>
<style lang="scss">
@import "./assets/css/app.css";
</style>
