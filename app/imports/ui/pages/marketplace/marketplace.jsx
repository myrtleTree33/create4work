import './marketplace.css';
import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';

class MarketplaceComponent extends Component {
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
    return (
      <div className="marketplace ui container">
      <h2 className="ui header">I am seeking for</h2>
      <div className="ui three column stackable grid container">
        <div className="column">
          <div className="ui segment">Content</div>
        </div>
        <div className="column">
          <div className="ui segment">Content</div>
        </div>
        <div className="column">
          <div className="ui segment">Content</div>
        </div>
        <div className="column">
          <div className="ui segment">Content</div>
        </div>
        <div className="column">
          <div className="ui segment">Content</div>
        </div>
      </div>
    </div>);
  }
}
const Marketplace = withTracker(() => {
  return {};
})(MarketplaceComponent);

export {
  Marketplace,
  MarketplaceComponent
};
