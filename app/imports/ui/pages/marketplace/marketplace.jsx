import './marketplace.css';
import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Link} from 'react-router';

import {Type} from './type/type.jsx';

class MarketplaceComponent extends Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  getTypes() {
    return [
      {
        _id: 1,
        title: 'Dance',
        description: 'Instructors, classes, etc.',
        imgUrl: 'https://static1.squarespace.com/static/59b8fc17197aea4b21b17141/t/59bbcd59bebafbc95b98a20d/1505562292218/abingdon-carpentry-banner.jpg?format=1500w'
      }, {
        _id: 2,
        title: 'Cleaning',
        description: 'Cleaners, etc.',
        imgUrl: 'https://static1.squarespace.com/static/59b8fc17197aea4b21b17141/t/59bbcd59bebafbc95b98a20d/1505562292218/abingdon-carpentry-banner.jpg?format=1500w'
      }, {
        _id: 3,
        title: 'Education',
        description: 'Tutors, etc.',
        imgUrl: 'https://static1.squarespace.com/static/59b8fc17197aea4b21b17141/t/59bbcd59bebafbc95b98a20d/1505562292218/abingdon-carpentry-banner.jpg?format=1500w'
      }
    ];
  }

  renderTypes() {
    return this.getTypes().map((type) => (<Type key={type._id} type={type}/>));
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (<div className="marketplace ui container">
      <h2 className="ui header">What are you looking for?</h2>
      <div className="ui two cards">
        {this.renderTypes()}
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
