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
  }

  componentWillUnmount() {}

  render() {
    return (<div className="card type">
      <div className="image">
        <img src={this.props.type.imgUrl}/></div>
      <div className="content">
        <div className="header">{this.props.type.title}</div>
        <div className="description">
          {this.props.type.description}
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
