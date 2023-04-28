import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ModalBasic from "../components/Modal";
import ModalBasic2 from "../components/Modal2";
import { BsWindowFullscreen } from "react-icons/bs";

const FeatureModal = () => {

        // 모달창 노출 여부 state
        const [modalOpen, setModalOpen] = useState(false)
        const [modalOpen2, setModalOpen2] = useState(false)

        // 모달창 노출
        const showModal = () => {
            setModalOpen(true)
        };
        const showModal2 = () => {
            setModalOpen2(true)
        };
        
        return (
            <div>
                <h1>Modal&nbsp;<BsWindowFullscreen/></h1>
                <Modallist>
                <ModalButton backgroundColor="#77af9c" onClick={showModal}>Open Modal1</ModalButton>
                {modalOpen === true ? <ModalBasic setModalOpen={setModalOpen}/> : null }
                <ModalButton backgroundColor="#d75d47" onClick={showModal2}>Open Modal2</ModalButton>
                {modalOpen2 === true ? <ModalBasic2 setModalOpen2={setModalOpen2}/> : null }
                </Modallist>
            </div>
        );
};

export default FeatureModal

const Modallist = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
const ModalButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 15px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.backgroundColor};
    color: white;
    &:hover {
    background-color: #505b57;
    }
    width: 100px;
    height: 40px;
`
