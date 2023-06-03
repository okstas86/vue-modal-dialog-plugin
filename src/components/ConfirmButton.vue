<template>
  <button @click="showConfirm">Show Confirm</button>
</template>

<script setup lang="ts">
import useConfirm from '../../.packages/confirm/index';

const { confirm } = useConfirm();

const showConfirm = () => {
  confirm({
    message: 'Вы уверены?',
    oneDone() {
      console.log('Ok!');
    },
    oneClose() {
      console.log('Closed!');
    },
  });
};
</script>
