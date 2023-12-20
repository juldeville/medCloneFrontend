import Modal from "react-modal";

type SignUpModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  modalStep: 1 | 2;
};

export default function SignUpModal({
  isOpen,
  onRequestClose,
  modalStep,
}: SignUpModalProps) {
  return <Modal isOpen={isOpen} onRequestClose={onRequestClose}></Modal>;
}
