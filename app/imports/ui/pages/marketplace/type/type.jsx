import './type.css';
import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';

class TypeComponent extends Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {
    console.log(this.props.params);
  }

  componentWillUnmount() {}

  render() {
    return (<div>
      <div className="ui container">
        <div className="ui center aligned basic segment">
          <h2 className="type">What are you looking for?</h2>
        </div>
        <div className="ui stackable center aligned three column grid">
          <div className="column">
            Latin classes
          </div>
          <div className="column">
            Waltz classes
          </div>
          <div className="column">
            Tap dancing
          </div>
          <div className="column">
            West Coast Swing
          </div>
        </div>
      </div>
    </div>);
  }
}
const Type = withTracker(() => {
  return {};
})(TypeComponent);

export {
  Type,
  TypeComponent
};
