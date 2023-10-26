import { BrowserRouter, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import MainPage from "./components/page/MainPage";

const MainTitle = styled.div`
  background-color: #d2e3ed;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

function App() {
  return (
      <MainTitle>
        준우 todo
        <MainPage></MainPage>
      </MainTitle>

  );
}

export default App;
