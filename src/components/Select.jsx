import styled from "styled-components";

const options = [
    { value: "리액트", name: "리액트" },
    { value: "자바", name: "자바" },
    { value: "스프링", name: "스프링" },
    { value: "자바스크립트", name: "자바스크립트" },
    { value: "노드js", name: "노드js" },
]

const SelectBox = () => {
    return (
        <Container>
            <Select>
                {options.map((option) => (
                    <option
                        value={option.value}
                        defaultValue={"리액트" === option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>
            </Container>
    );
};

export default SelectBox

const Container = styled.div`
    display: flex;
    gap: 10px;
`
const Select = styled.select`
	width: 40%;
	padding: 8px 8px;
	font-size: inherit;
	border: 1px solid;
	border-radius: 4px;
`