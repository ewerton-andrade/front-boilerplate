import { Modal } from "antd"
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { OpenModalActions } from "../../Redux/Features/OpenModal";

const ModalCreate = () => {

  const open = useAppSelector((state) => state.openModal.open);
  const dispatch = useAppDispatch();
  const { setOpenModal } = OpenModalActions;
  
  const handleCancel = () => {
    dispatch(setOpenModal(false));
  };  

  return (
    <Modal open={open} centered={true} width="30rem" footer={false} onCancel={handleCancel}>
      <p>a</p>
    </Modal>
  )
}

export default ModalCreate