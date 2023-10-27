import React from 'react';
import styled, { css } from 'styled-components';
import { } from "react-icons/bs";


const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  word-break: break-all;

  /* 짝수번째 배경색 지정 */
  &:nth-child(even) {
    background: #f8f9fa;
  }

  /* 엘리먼트 사이사이에 위쪽 테두리 넣기 */
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    /* 아이콘 스타일링 */
    font-size: 1.5rem;

    /* 체크되었을 때 보여줄 체크박스 스타일 */
    color: ${props => props.checked && '#22b8cf'};
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; 
  display: flex;
  justify-content: space-between;


  ${props => props.text &&    /* 체크되었을 때 텍스트에 보여줄 스타일 */
    css`
      color: #adb5bd;
      text-decoration: line-through;
      opacity: 0.5;

    .textbox1 {
      
    }
    .textbox2 {
      color: #adadad;
    }
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
    color: #ff8787;
  }
  
`;


function TodoListItem(props) {


  return (
    <TodoListItemWrapper>
      <CheckBox
        checked={props.checked}
        onClick={() => { props.handleChecked(props.id) }}
      > 쳌!

      </CheckBox>
      <Text
        text={props.checked}
      >
        <div className='textbox1'>{props.text}</div>
        <div className='textbox2'>{JSON.stringify(props.date)}</div>
      </Text>
      <Remove
        onClick={() => {
          props.handleRemove(props.id)
        }}
      >지워!
      </Remove>
    </TodoListItemWrapper>
  );
}

export default TodoListItem;