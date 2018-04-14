import './marketplace.css';
import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Link} from 'react-router';

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
    return (<div className="marketplace ui container">
      <h2 className="ui header">I am seeking for</h2>
      <div className="ui three column stackable grid container">
        <div className="column">
          <div className="ui basic segment">
            <Link to="/marketplace/dance">
            <img className="ui fluid image" src="https://media.istockphoto.com/photos/fit-young-women-dancing-and-exercising-picture-id535496960" />
              <p>
                Dance classes
              </p>
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="ui basic segment">Outdoor activities</div>
          </div>
          <div className="column">
            <div className="ui basic segment">Tuition</div>
          </div>
          <div className="column">
            <div className="ui basic segment">Art gatherings</div>
          </div>
          <div className="column">
            <div className="ui basic segment">Public speaking</div>
          </div>
        </div>
      </div>); } } const Marketplace = withTracker(() => {
        return {};
      })(MarketplaceComponent); export {
        Marketplace,
        MarketplaceComponent
      };
