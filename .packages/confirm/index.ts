import { createApp } from 'vue';
import ConfirmModal from '../../src/components/ConfirmModal.vue';

interface ConfirmOptions {
  message: string;
  oneDone?: () => void;
  oneClose?: () => void;
}

export default function useConfirm() {
  const confirm = (options: ConfirmOptions) => {
    const app = createApp(ConfirmModal, {
      message: options.message,
      onConfirm: options.oneDone,
      onClose: options.oneClose,
    });

    const container = document.createElement('div');
    document.body.appendChild(container);

    app.mount(container);
  };

  return {
    confirm,
  };
}
