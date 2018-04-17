import './master-layout.css';
import React, {Component} from 'react';
import {Link} from 'react-router';

class MasterLayoutComponent extends Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return (<div>

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
      <div className="ui segment">
        <p></p>
      </div>

      {this.props.children}

    </div>);
  }
}

const MasterLayout = MasterLayoutComponent;
export {
  MasterLayout,
  MasterLayoutComponent
};
