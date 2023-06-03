<template>
  <transition name="modal">
    <div class="confirm-modal" v-if="showModal">
      <div class="confirm-modal-content">
        <p>
          <strong>{{ message }}</strong>
        </p>
        <button @click="handleConfirm">Confirm</button>
        <button @click="handleClose">Close</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showModal: true,
    };
  },
  methods: {
    handleConfirm() {
      this.$emit('confirm');
      this.showModal = false;
    },
    handleClose() {
      this.$emit('close');
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.confirm-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirm-modal-content {
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 4px;
}
</style>
