import React, { Component, Fragment } from "react";
import { observer } from "mobx-react";

@observer
export default class TaskList extends Component {
  render() {
    const { store } = this.props;
    return (
      <ul className="list">
        {store.todos.map(task => {
          return (
            <Fragment key={task.id}>
              <li>
                {task.completed ? (
                  <s style={{ color: "#3BB044" }}>{task.task}</s>
                ) : (
                  task.task
                )}
              </li>
              <a
                className="taskBtn"
                onClick={() => store.completeTodo(task.id)}
              >
                {task.completed ? (
                  <i className="far fa-check-circle greenIcon" />
                ) : (
                  <i class="far fa-check-circle" />
                )}
              </a>
              <a
                className="taskBtn"
                onClick={() => store.deleteTodo(task.id)}
              >
                <i className="fas fa-backspace" />
              </a>
            </Fragment>
          );
        })}
      </ul>
    );
  }
}
