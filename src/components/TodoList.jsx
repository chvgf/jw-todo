import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  width: 35rem;
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
  background-color: #d3d3d3;
  /* display: flex; */
  border: 3px solid #7146c2;
`;

function TodoList(props) {

  return (
    <TodoListWrapper>
      {props.todos.map((mapItem) => {
        console.log(mapItem);
        return <TodoListItem
          key={mapItem.id}
          id={mapItem.id}
          text={mapItem.text}
          checked={mapItem.checked}
          date={mapItem.date}

          handleRemove={props.handleRemove}
          handleChecked={props.handleChecked}
          handleRevised={props.handleRevised}
          handleFixValue={props.handleFixValue}
        />
      })}

    </TodoListWrapper>
  );
}

export default TodoList;