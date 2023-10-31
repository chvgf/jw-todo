// css 라이브러리
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

// 컴포넌트
import MainPage from "./components/MainPage";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

import { useEffect, useState } from "react";
import TodoTrashCan from "./components/TodoTrashCan";


const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #3c3c3c;
  }
`;

const Root = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`;

const DeleteAll = styled.button`
  display: flex;
  width: 100px;
  height: 50px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid red;
  background-color: #313131;
  color: red;
  
  &:hover {
    color: #fff;
    background-color: red;
    border: 1px solid #fff;
  }
`;

let date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

function getToday(){ // todo 추가한 시간 보여주기
  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (1 + date.getMonth())).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  return "시작일: " + year + "-" + month + "-" + day;
};
const TimeWrapper = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 50px;
  position: absolute;
  left: 20px;
  bottom: 10px;
  box-shadow: 1px 1px 1px 1px gray;
`;



  function App() {
  const [todos, setTodos] = useState([]);   // toddList 기본 배열

  const handleInsert = (text) => { // todo 추가기능
    const todo ={
      id: uuidv4(),
      text: text,
      checked: false,
      date: getToday()
    };

    setTodos([...todos, todo]);
  };

  const handleRemove = (id) => { // todo 제거기능                // ㅁㅁㅁㅁ
    setTodos(todos.filter((todo) => {
      return todo.id !== id
    }));
  };

  const handleAllDel = (id) => {  // 모두제거 기능
    alert('침대 고')
    setTodos(todos.filter((todo) => {
      return todo.id === id
    }))
  }

  const handleChecked = (id) => { // 쳌! 기능           // ㅂㅁㅁㅁㅁㅁ
    setTodos(todos.map((CheckedTodo) => {
      return CheckedTodo.id === id ? {...CheckedTodo, checked: !CheckedTodo.checked} : CheckedTodo
    }));
  };

  const handleFixValue = (id, fixText) => {  // 수정기능
    setTodos(todos.map((aaa => {
      return aaa.id === id ? {...aaa, text: fixText} : aaa
    })))
  }
  
  return (
    <>
      <GlobalStyle  /> {/* 리셋 css */}
      <Root>
        <MainPage>
          <TodoInsert handleInsert={handleInsert} />
          <TodoList
            todos={todos}
            handleRemove={handleRemove}
            handleChecked={handleChecked}
            handleFixValue={handleFixValue}
            />
        </MainPage>
        <DeleteAll
          onClick={
            ()=>{
            handleAllDel()
          }}
        >
          <BsFillExclamationTriangleFill style={{fontSize: 45}}/>
          아무것도 안하기
        </DeleteAll>
        <TimeWrapper>{hours}:{min}:{sec}</TimeWrapper>
      </Root>          
    </>
  );
}

export default App;
