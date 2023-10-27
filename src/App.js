// css 라이브러리
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";

// 컴포넌트
import MainPage from "./components/MainPage";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

import { useState } from "react";


const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #3c3c3c;
  }
`;

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function getToday(){ // todo 추가한 시간 보여주기
  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (1 + date.getMonth())).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);

  return "시작일" + year + "-" + month + "-" + day;
};



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

  const handleRemove = (id) => { // todo 제거기능                // 이따 물어보긩ㅁㅁㅁㅁ
    setTodos(todos.filter((todo) => {
      return todo.id !== id
    }));
  };

  const handleChecked = (id) => { // 쳌! 기능           // 얘도 이따 물어보긩ㅂㅁㅁㅁㅁㅁ
    setTodos(todos.map((CheckedTodo) => {
      return CheckedTodo.id === id ? {...CheckedTodo, checked: !CheckedTodo.checked} : CheckedTodo
    }));
  };

  return (
    <>
      <GlobalStyle  /> {/* 리셋 css */}
      <Root>
        <MainPage>
          <TodoInsert handleInsert={handleInsert} />
          <TodoList todos={todos} handleRemove={handleRemove} handleChecked={handleChecked}/>
        </MainPage>
        <MainPage>
          <TodoInsert handleInsert={handleInsert} />
          <TodoList todos={todos} handleRemove={handleRemove} handleChecked={handleChecked}/>
        </MainPage>
      </Root>          {/* ?????????????????????? */}
    </>
  );
}

export default App;
