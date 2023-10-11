import {TodoListItemDto, TodoListItemPayload} from './todo-list.interfaces';

export class TodoListService {
  public static createItem(
    payload: TodoListItemPayload
  ): Promise<TodoListItemDto> {
    return fetch('http://localhost:3000/api/todo-item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json());
  }

  public static getItems(): Promise<TodoListItemDto[]> {
    return fetch('http://localhost:3000/api/todo-items', {
      method: 'GET',
    }).then((response) => response.json());
  }

  public static deleteItem(id: string): Promise<TodoListItemDto> {
    return fetch(`http://localhost:3000/api/todo-item/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  }
}
