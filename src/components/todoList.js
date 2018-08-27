import React, { Component, Fragment } from "react";
import uuidv4 from "uuid/v1";
import store from "../stores/todoStore";

import TaskList from "./taskList";

export default class TodoList extends Component {
  handleAdd = e => {
    const task = e.target.value;
    if (e.key === "Enter") {
      store.addTodo({ task, completed: false, id: uuidv4() });
      e.target.value = "";
    }
  };

  render() {
    return (
      <Fragment>
        <input
          placeholder="Enter a Task"
          className="search"
          onKeyPress={this.handleAdd}
        />
        <TaskList store={store} />
      </Fragment>
    );
  }
}
