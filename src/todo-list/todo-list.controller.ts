import {ReactiveController, ReactiveControllerHost} from 'lit';
import {StatusRenderer, Task} from '@lit/task';
import {
  TodoListItem,
  TodoListItemDto,
  TodoListItemPayload,
} from './todo-list.interfaces';
import {TodoListService} from './todo-list.service';

export class TodoListController implements ReactiveController {
  private todoItemsTask!: Task<TodoListItem[], TodoListItem[]>;

  constructor(private host: ReactiveControllerHost) {
    this.host.addController(this);

    this.createTodoItemsTask();
  }

  public hostConnected(): void {}

  public todoItemsRender(renderFunctions: StatusRenderer<TodoListItem[]>) {
    return this.todoItemsTask.render(renderFunctions);
  }

  public createItem(payload: TodoListItemPayload): Promise<TodoListItem> {
    return TodoListService.createItem(payload).then((item: TodoListItemDto) => {
      this.todoItemsTask.run([...(this.todoItemsTask.value || []), item]);
      return item;
    });
  }

  public deleteItem(id: string): Promise<TodoListItem> {
    return TodoListService.deleteItem(id).then((item: TodoListItemDto) => {
      const filteredItems: TodoListItem[] = (
        this.todoItemsTask.value ?? []
      ).filter((item: TodoListItem) => item.id !== id);
      this.todoItemsTask.run(filteredItems);
      return item;
    });
  }

  private createTodoItemsTask(): void {
    this.todoItemsTask = new Task(this.host, async (items: TodoListItem[]) => {
      if (items) {
        return items;
      }

      return await TodoListService.getItems();
    });

    this.todoItemsTask.run();
  }
}
