/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AddLessons from './App/addLessons/AddLessons';
import stack from './App/stack'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => stack);
