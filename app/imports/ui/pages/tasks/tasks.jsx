import './tasks.css';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class TasksComponent extends Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  }

  componentDidMount() { }

  componentWillUnmount() {
  }

  render() {
    return (<h2 className="tasks">Find me in app/imports/ui/pages/tasks/tasks</h2>);
  }
}
const Tasks = withTracker(() => { return {}; })(TasksComponent);

export { Tasks, TasksComponent };
