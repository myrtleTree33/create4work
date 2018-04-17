import './nav-bar.css';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {withTracker} from 'meteor/react-meteor-data';

class NavBarComponent extends Component {
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
    return (<div className="nav-bar">
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/marketplace" className="item active">
          Marketplace
        </Link>
        <Link to="/tasks" className="item">
          Tasks
        </Link>
        <div className="right menu">
          <Link to="/config" className="ui item">
            Config
          </Link>
        </div>
      </div>
    </div>);
  }
}
const NavBar = withTracker(() => {
  return {};
})(NavBarComponent);

export {
  NavBar,
  NavBarComponent
};
