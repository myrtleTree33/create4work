import './config.css';
import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';

class ConfigComponent extends Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (<div className="config">
      <div className="center aligned ui container">
        <h1>Settings</h1>
      </div>
    </div>);
  }
}
const Config = withTracker(() => {
  return {};
})(ConfigComponent);

export {
  Config,
  ConfigComponent
};
