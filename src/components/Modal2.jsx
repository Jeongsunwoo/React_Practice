import styled from "styled-components";
import Modal from 'react-modal';

function ModalBasic2({ setModalOpen2 }) {
        // 모달 끄기 
        const closeModal2 = () => {
            setModalOpen2(false);
    };

    return (
        <>
            <Modal isOpen={()=>setModalOpen2} onRequestClose={closeModal2}>
                <Close onClick={closeModal2}>
                    닫기
                </Close>
                <p> 닫기 버튼 1개가 있고,
                <br />
                외부 영역을 누르면 모달이 닫혀요.</p>
            </Modal>

        </>
    );
}
    export default ModalBasic2;
  
  /* 모달창 내부 X버튼 */
const Close = styled.button`
    position: absolute;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
    background-color: #77af9c;
    color: white;
    height: 30px;
    width: 50px;
    &:hover {
    background-color: #505b57;
    }
    right: 10px;
    top: 10px;
`