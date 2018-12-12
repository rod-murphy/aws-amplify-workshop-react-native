/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import React, {Component} from 'react';

Amplify.configure(config)

class AppWrapper extends React.Component {
  rerender = () => this.forceUpdate()
  render() {
    return <App rerender={this.rerender} />
  }
}

AppRegistry.registerComponent(appName, () => AppWrapper);
