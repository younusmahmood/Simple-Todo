import { observable, action } from "mobx";

class TodoStore {
  @observable
  todos = [];

  @action
  addTodo = item => {
    if (item.task.length > 0) this.todos.push(item);
  };

  @action
  completeTodo = id => {
    const index = this.todos.findIndex(item => item.id === id);
    this.todos[index].completed = !this.todos[index].completed;
  };

  @action
  deleteTodo = id => {
    const index = this.todos.findIndex(item => item.id === id);
    this.todos.splice(index, 1);
  };
}

export default new TodoStore();
