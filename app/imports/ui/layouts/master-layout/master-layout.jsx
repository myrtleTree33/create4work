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
      <div className="ui segment">
        <div className="ui red fixed inverted menu">
          <div className="ui container">

            <Link to="/marketplace" className="item">
              <i className="search plus icon"></i>
              Marketplace
            </Link>
            <Link to="/tasks" className="item">
              <i className="tasks icon"></i>
              Tasks
            </Link>

            <div className="right menu">
              <Link to="/config" className="item">
                <i className="cogs icon"></i>
                Config
              </Link>
            </div>

          </div>
        </div>
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
