import React, { Children } from 'react';
import styled from "styled-components";

const TodoTemplateWrapper = styled.div`
  display: flex;
  width: 40rem;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 30px;
  overflow: hidden;

  .app-title {
    background: #1d3975;
    color: white;
    height: 50rem;
    width: 2.5rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .content {
    background: white;
  }
`;


function MainPage(props) {
  const { children } = props;

  return (
    <TodoTemplateWrapper>
      <div className='app-title'>이게뭐람</div>
      <div className='content'>{children}</div>    {/* 칠드런 물어보기 */}
    </TodoTemplateWrapper>
  );
}

export default MainPage;