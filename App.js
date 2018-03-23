

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
    import Tv_detail from './Tv_detail.js'
import SideBarMenu from './SideBarMenu.js'
import TVviews from './TVviews.js'
import Person_detail from './Person_detail.js'
import Popular_people from './Popular_people.js'

export default class App extends Component{

  render() {
    return (
      <Router>
            <Scene key='root'>
              <Scene hideNavBar hideTabBar
              component={Moviesview}
              title="Start"
              key="Moviesview"
              />
              <Scene hideNavBar hideTabBar
              component={Detailpage}
              title="Profile"
              key="Detailpage"
              />
              <Scene hideNavBar hideTabBar
              component={Tv_detail}
              title="Profile"
              key="Tv_detail"
              />
              <Scene hideNavBar hideTabBar
              component={SideBarMenu}
              title="Profile"
              key="side"
              // initial
              />
              <Scene hideNavBar hideTabBar
              component={TVviews}
              title="Profile"
              key="TVviews"
              />
              <Scene hideNavBar hideTabBar
              component={Person_detail}
              title="Profile"
              key="Person_detail"
              />
              <Scene hideNavBar hideTabBar
              component={Popular_people}
              title="Profile"
              key="Popular_people"
              initial
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
