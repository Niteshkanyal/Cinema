

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
import Popular_people_detail from './Popular_people_detail.js'
import Discover from './Discover.js'
import Search from './Search.js'

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

                  />
                  <Scene hideNavBar hideTabBar
                  component={Popular_people_detail}
                  title="Profile"
                  key="Popular_people_detail"

                  />
                  <Scene hideNavBar hideTabBar
                  component={Discover}
                  title="Profile"
                  key="Discover"

                  />
                  <Scene hideNavBar hideTabBar
                  component={Search}
                  title="Profile"
                  key="Search"

                  />
            </Scene>
        </Router>
    );
  }
}
