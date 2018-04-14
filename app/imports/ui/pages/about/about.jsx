import './about.css';
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class AboutComponent extends Component {
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
    return (<h2 className="about">Find me in app/imports/ui/pages/about/about</h2>);
  }
}
const About = withTracker(() => { return {}; })(AboutComponent);

export { About, AboutComponent };
