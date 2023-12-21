import { Modal } from "antd"
import { useState } from 'react';

const ModalCreate = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Modal open={true} centered width="30rem" footer={false} closable={false}>
      <p>a</p>
    </Modal>
  )
}

export default ModalCreate