<template>
  <div id="app">
    <ConfirmButton />
  </div>
</template>

<script>
import useConfirm from '../.packages/confirm';
import ConfirmButton from './components/ConfirmButton.vue';

export default {
  components: {
    ConfirmButton,
  },
};
</script>

<style>
#app {
  text-align: center;
  padding: 20px;
}
</style>
