import React from "react";
import styled,{ css } from "styled-components";
import { AiFillApple,AiFillAndroid,AiOutlineCheckSquare } from "react-icons/ai";

const FeatureButton = () => {

    return (
        <>
            <h1>Button&nbsp;<AiOutlineCheckSquare/></h1>
            <Container>
                <Stbutton
                    size="large"
                    onClick={() => window.alert("버튼 만들기")}
                    backgroundColor="#77af9c">
                    Large Primary Button<AiFillAndroid fontSize={15} />
                </Stbutton>
                <Stbutton size="midium"
                    backgroundColor="#77af9c">Medium</Stbutton>
                <Stbutton size="small"
                    backgroundColor="#77af9c">Small</Stbutton>
            </Container>
            <br />
            <Container>
                <Stbutton
                    size="large"
                    onClick={() => window.alert("버튼 만들기")}
                    backgroundColor="#d75d47">
                    Large Primary Button<AiFillApple fontSize={15}/>
                </Stbutton>
                <Stbutton size="midium"
                    backgroundColor="#d75d47">Medium</Stbutton>
                <Stbutton size="small"
                    backgroundColor="#d75d47">Small</Stbutton>
            </Container>
        </>
    );
};

export default FeatureButton;

const Stbutton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 15px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.backgroundColor};
    color: white;
    &:hover {
    background-color: #505b57;
    }

    ${props => {
        switch (props.size) {
            case "large":
                return css`
          height: 50px;
          width: 200px;
        `;
            case "medium":
                return css`
          height: 45px;
          width: 130px;
        `;
            case "small":
                return css`
          height: 30px;
          width: 70px;
        `;
            default:
                return css`
          height: 40px;
          width: 100px;
        `;
        }
    }}
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`