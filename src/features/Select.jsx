import React from "react"
import styled from "styled-components"
import SelectBox from "../components/Select"
import { BiSelectMultiple } from "react-icons/bi";


const FeatureSelect = () => {
  return (
    <Container>
      <h1>Select&nbsp;<BiSelectMultiple/></h1>
      <SelectBox></SelectBox>
    </Container>
  )
}

export default FeatureSelect

const Container = styled.div`
  border: 3px solid #ddd;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`