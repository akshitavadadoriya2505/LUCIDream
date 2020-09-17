/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/navigation';
import {name as appName} from './app.json';
import React from 'react';

function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    return null;
  }
  return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
