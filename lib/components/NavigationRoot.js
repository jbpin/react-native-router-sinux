import React, { Component, Children } from 'react';
import { NavigationExperimental } from 'react-native';
import navigationStore from '../navigationStore';

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

export default class NavigationRoot extends Component {
  constructor(props) {
    super(props);
    this.scenes = {};
  }

  componentWillMount() {
    this.initNavigation(this.props);
    navigationStore.changed.add(this.onNavigationUpdated.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children) {
      this.initNavigation(nextProps);
    }
  }

  onNavigationUpdated() {
    this.setState({ ...this.state, ...navigationStore.getState() });
  }

  initNavigation(props) {
    Children.map(props.children, (c) => {
      if (c.props.routeKey) {
        this.scenes[c.props.routeKey] = c;
      }
    });
    let initial = null;
    if (!this.state || (!this.state.routes && !this.state.routes.length)) {
      navigationStore.push({ key: props.initialRoute });
      initial = { routes: [{ key: props.initialRoute }] };
    }
    this.setState({ ...navigationStore.getState(), ...initial });
  }


  renderScene(props) {
    const component = this.scenes[props.scene.route.key];
    if (!component) {
      throw new Error(`component for key ${props.scene.route.key} not found`, props);
    }
    component.props = { ...props, ...component.props };
    return component;
  }

  render() {
    return (
      <NavigationCardStack
        {...this.props}
        renderScene={(props) => this.renderScene(props)}
        navigationState={this.state}
      />);
  }
}

NavigationRoot.propTypes = { children: React.PropTypes.node };
