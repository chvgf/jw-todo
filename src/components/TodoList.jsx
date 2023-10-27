import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  width: 35rem;
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
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
        />
      })}

    </TodoListWrapper>
  );
}

export default TodoList;