import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BsReverseBackspaceReverse, BsCheckSquare, BsBrush, BsPlusSquareDotted, BsReplyAllFill } from "react-icons/bs";


const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  word-break: break-all;
  background-color: #f2effc;
  margin: 1rem;
  border: 1px solid #000;
  box-shadow: 1px 1px 1px 1px #7e7a7a;

  &:nth-child(even) {
    background: #c9c5eb;
  }

  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 1.5rem;

    /* 체크되었을 때 보여줄 체크박스 스타일 */
    color: ${props => props.checked && '#2885c4'};
    background-color: ${props => props.checked && '#ca89ff'};
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; 
  display: flex;
  justify-content: space-between;

  .textbox1 {
      font-size: 14px;
      line-height: 24px;
    }
    .textbox2 {
      color: #1b0329;
      font-size: 10px;
      padding-right: 10px;
      line-height: 24px;
    }

  ${props => props.text &&    /* 체크되었을 때 텍스트에 보여줄 스타일 */
    css`
      color: #71b5ec;
      text-decoration: line-through;
      opacity: 0.5;
    `
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;

const FixedBtn = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #9e7b7b;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    color: #743d3d;
  }
`;

const FixBox = styled.div`
  display: flex;
  svg {
    font-size: 1.5rem;
    margin-left: 10px;
    transition: 0.1s;
    cursor: pointer;

    &:hover {
      background-color: #d3aefd;
    }
  }
`;




function TodoListItem(props) {
  const [showBox, setShowBox] = useState(false);
  const [fixText, setFixText] = useState('')

  const handleFixBtn = () => {
    setShowBox(!showBox)
  }
  const fixValue = (e) => {
    setFixText(e.target.value)
  }

  return (
    <TodoListItemWrapper>
      <CheckBox
        checked={props.checked}
        onClick={() => { props.handleChecked(props.id) }}
      > <BsCheckSquare />

      </CheckBox>
      <Text
        text={props.checked}
      >
        {showBox
          ?
          <FixBox>
            <input placeholder='수정할 내용 입력' onChange={fixValue} value={fixText} />
            <BsPlusSquareDotted
              onClick={() => {
                props.handleFixValue(props.id, fixText)
                handleFixBtn()
              }}
            />
          </FixBox>
          :
          <div className='textbox1'>{props.text}</div>}

        <div className='textbox2'>{/* JSON.stringify */(props.date)}</div>
      </Text>
      <FixedBtn
        onClick={() => {
          handleFixBtn()
        }}
      >
        {showBox ? <BsReplyAllFill /> : <BsBrush />}
      </FixedBtn>
      <Remove
        onClick={() => {
          props.handleRemove(props.id)
        }}
      ><BsReverseBackspaceReverse />
      </Remove>
    </TodoListItemWrapper>
  );
}

export default TodoListItem;