import React, { useState } from 'react';
import { styled } from "styled-components";

const TrashCanWrapper = styled.div`
  width: 777px;
  height: 177px;
  background-color: #212921;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 30px;
  position: absolute;
  bottom: 70px;
  color: #8857d8;

  .ccc {
    position: absolute;
    left: 20px;
  }
`;

function TodoTrashCan(props) {
  return (
    <TrashCanWrapper >
      <div className='ccc'>
        {props.checked ? props.text : null}
      </div>
    </TrashCanWrapper>
  );
}

export default TodoTrashCan;