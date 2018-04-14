import './config.css';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class ConfigComponent extends Component {
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
    return (<h2 className="config">Find me in app/imports/ui/pages/config/config</h2>);
  }
}
const Config = withTracker(() => { return {}; })(ConfigComponent);

export { Config, ConfigComponent };
