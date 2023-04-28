import React, { useState } from "react"
import styled from "styled-components"
import { MdInput } from "react-icons/md";

const FeatureInput = () => {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const nameChageHandler = (event) => {
    setName(event.target.value);
  };

  // const priceChangeHandler = (event) => {
  //     setPrice(event.target.value);
  // };
  const addComma = (price) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  }

  const addHandler = () => {
    const newInput = {
      name,
      price
    }
    window.alert(`이름:${newInput.name} 가격:${newInput.price}`)
    setName("")
    setPrice("")
  };

  const priceChangeHandler = (e) => {
    const { value } = e.target;
    let str = value.replaceAll(",", "");
    setPrice(str);
  };

  return (
    <>
      <h1>Input&nbsp;<MdInput/></h1>
      <Container>
        <InputList>
          <label>Name : </label>
          <input type="" value={name} onChange={nameChageHandler}></input>
        </InputList>
        <InputList>
          <label>Price : </label>
          <input type="text" value={addComma(price) || ""} onChange={(e) => priceChangeHandler(e)}></input>
        </InputList>
        <Stbutton onClick={addHandler}>Add</Stbutton>
      </Container>
    </>
  );
};

export default FeatureInput;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
const InputList = styled.div`
  padding-top: 4px;
`

const Stbutton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 15px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
    background-color: #77af9c;
    color: white;
    height: 30px;
    width: 70px;
    &:hover {
    background-color: #505b57;
    }
    `