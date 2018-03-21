
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions,
  ScrollerView,
  Image,
  AsyncStorage,ScrollView
} from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Info_detail extends Component{
  state = {
     head:[],
  }
  async componentDidMount()
  {
         let response = await AsyncStorage.getItem('head');
         let listOfTasks = await JSON.parse(response) || [];
         this.setState({head:listOfTasks});

  }
  render() {
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <ScrollView>
        <View style={{flex:0.1,marginTop:height*0.02}}></View>
        <View style={{flex:0.2,flexDirection:'row'}}>
          <View style={{flex:0.05}}></View>
          <View style={{flex:0.12}}>
            <Icon name='star' style={{color:'black', fontSize:37,marginTop:height*0.007,marginLeft:width*0.03}}/>
          </View>
          <View style={{flex:0.036}}></View>
          <View style={{flex:0.12}}>
            <Image source={require('../Images/thdb.png')} style={{height:height*0.065,width:width*0.12,resizeMode:'stretch'}}/>
          </View>
          <View style={{flex:0.036}}></View>
          <View style={{flex:0.12}}>
              <Image source={require('../Images/imdb.png')}style={{height:height*0.065,width:width*0.12,resizeMode:'stretch'}}/>
          </View>
          <View style={{flex:0.036}}></View>
          <View style={{flex:0.12}}>
              <Image source={require('../Images/apple.png')}style={{height:height*0.065,width:width*0.12,resizeMode:'stretch'}}/>
          </View>
          <View style={{flex:0.036}}></View>
          <View style={{flex:0.12}}>
              <Image source={require('../Images/popcorn.jpeg')}style={{height:height*0.065,width:width*0.12,resizeMode:'stretch'}}/>
          </View>
          <View style={{flex:0.036}}></View>
          <View style={{flex:0.12,backgroundColor:'#66cc33'}}>
          </View>
          <View style={{flex:0.05}}></View>
        </View>
        <View style={{flex:0.2}}></View>
        <View style={{flex:0.5,flexDirection:'column'}}>
          <View style={{flex:0.3}}><Text style={{fontSize:width*0.035,color:'black',padding:width*0.05}}>{this.state.head.overview}</Text></View>
          <View style={{flex:0.1}}></View>
          <View style={{flex:0.2}}>
            <Text>Release Date:{this.state.head.release_date}</Text>
            <Text>DVD Release Date:{this.state.head.budget}</Text>
            <Text>Directed By:{this.state.head.revenue}</Text>
            <Text>Budget:{}</Text>
            <Text>Revenue:{}</Text>
          </View>
          <View style={{flex:0.7}}><Text style={{fontSize:width*0.035,color:'black',padding:width*0.05}}>{this.state.head.overview}</Text></View>
        </View>
        </ScrollView>
      </View>
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
