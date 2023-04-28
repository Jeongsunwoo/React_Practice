import styled from "styled-components";
import Modal from 'react-modal';

function ModalBasic({ setModalOpen }) {
        // 모달 끄기 
        const closeModal = () => {
            setModalOpen(false);
    };

    return (
        <>
            <Modal isOpen={()=>setModalOpen}>
                <Close onClick={closeModal}>
                    닫기
                </Close>
                <Close2>
                    확인
                </Close2>
                <p> 닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                않아요.</p>
            </Modal>

        </>
    );
}
    export default ModalBasic;
  
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
    right: 70px;
    top: 10px;
`
const Close2 = styled.button`
    position: absolute;
    position: absolute;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
    background-color: #d75d47;
    color: white;
    height: 30px;
    width: 50px;
    &:hover {
    background-color: #505b57;
    }
    right: 10px;
    top: 10px;
`

