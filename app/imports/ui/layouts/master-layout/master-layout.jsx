import './master-layout.css';
import React, {Component} from 'react';

import {NavBar} from '../../pages/nav-bar/nav-bar.jsx';


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

      <NavBar />

      {this.props.children}

    </div>);
  }
}

const MasterLayout = MasterLayoutComponent;
export {
  MasterLayout,
  MasterLayoutComponent
};
