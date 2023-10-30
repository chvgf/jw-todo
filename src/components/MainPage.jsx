import React, { Children } from 'react';
import styled from "styled-components";

const TodoTemplateWrapper = styled.div`
  display: flex;
  width: 40rem;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 30px;
  overflow: hidden;
  min-width: 560px;

  .content {
    background: white;
  }
`;



function MainPage(props) {
  const { children } = props;

  return (
    <>
      {/* <div className='app-title'>aa</div> */}
      <TodoTemplateWrapper>
        <div className='content'>{children}</div>    {/* 칠드런 물어보기 */}
      </TodoTemplateWrapper>
    </>
  );
}

export default MainPage;