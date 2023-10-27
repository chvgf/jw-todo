import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillArrowDownLeftSquareFill } from "react-icons/bs";


const TodoInsertWrapper = styled.form`
  display: flex;
  background: #A297BD;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1; 

  &::placeholder {
    color: #dee2e6;

  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background;

  &:hover {
  background: #adb5bd;
  }
`;

function TodoInsert(props) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleInsertInValue = (e) => {
    e.preventDefault();

    if (!value) {
      alert('바보');
      return;
    }

    props.handleInsert(value);
    setValue('')
  }


  return (
    <TodoInsertWrapper >
      <StyledInput
        onChange={handleChange}
        value={value}
        type='text'
        placeholder='할짓거리 입력'
      />
      <StyledButton
        onClick={handleInsertInValue}
        type='button'
      >
        <BsFillArrowDownLeftSquareFill />
      </StyledButton>

    </TodoInsertWrapper>
  );
}

export default TodoInsert;