

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'

 import Moviesview from './Moviesview.js'
  import Detailpage from './Detailpage.js'

export default class App extends Component{

  render() {
    return (
      <Router>
            <Scene key='root'>
              <Scene hideNavBar hideTabBar
              component={Moviesview}
              title="Start"
              key="Moviesview"
              initial
              />
              <Scene hideNavBar hideTabBar
              component={Detailpage}
              title="Profile"
              key="Detailpage"
              />
            </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
