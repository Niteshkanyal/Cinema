import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions,AsyncStorage,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native';
import ScrollableTabView ,{ScrollableTabBar}from 'react-native-scrollable-tab-view'
import {Router,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
const imgPath = "https://image.tmdb.org/t/p/w500/";


import Info_detail from './detail_tab/Info_detail.js'
import Cast_detail from './detail_tab/Cast_detail.js'
import Reviews_detail from './detail_tab/Reviews_detail.js'

export default class Detailpage extends Component{
  state = {
     head:[],
     isLoading: true,
     dataSource:[],
  }

   async componentDidMount()
   {
          let response = await AsyncStorage.getItem('head');
          let listOfTasks = await JSON.parse(response) || [];
          this.setState({head:listOfTasks});
          alert(JSON.stringify(this.state.head))
          this.setState({isLoading:false});
          // alert(this.state.head)
          // return fetch('https://api.themoviedb.org/3/movie//images?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US')
          //   .then((response) => response.json())
          //   .then((responseJson) => {
          //
          //     this.setState({
          //       isLoading: false,
          //       dataSource: responseJson.results,
          //
          //     }, function(){
          //           alert(this.state.dataSource)
          //     });
          //
          //   })
          //   .catch((error) =>{
          //     console.error(error);
          //   });

   }
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <View style={{flex:0.55,flexDirection:'column',position:'relative'}}>

            <View style={{flex:0.65,position:'relative'}}>
              <Image source={{ uri: imgPath + this.state.head.backdrop_path }} style={{ width:width, height:height*0.38,resizeMode:'stretch',position:'relative'}} />
              <Icon name='arrow-left' style={{color:'white', fontSize:20,marginTop:height*0.007,marginLeft:width*0.03,position:'absolute'}}/>
              <Icon name='home' style={{color:'white', fontSize:25,marginTop:height*0.007,marginLeft:width*0.7,position:'absolute'}}/>
              <Icon name='home' style={{color:'white', fontSize:25,marginTop:height*0.007,marginLeft:width*0.8,position:'absolute'}}/>
              <Icon name='ellipsis-v' style={{color:'white', fontSize:25,marginTop:height*0.007,marginLeft:width*0.95,position:'absolute'}}/>
            </View>

            <View style={{flex:0.35,backgroundColor:'#303840',flexDirection:'row',position:'relative'}}>

              <View style={{flex:0.38}}></View>
              <View style={{flex:0.62,flexDirection:'column'}}>
                <View style={{flex:0.2}}></View>
                <View style={{flex:0.1}}></View>
                <View style={{flex:0.2}}>
                  <Text style={{color:'white',fontSize:width*0.052}}>{this.state.head.title}</Text>
                </View>
                <View style={{flex:0.1}}></View>
                <View style={{flex:0.4}}></View>
             </View>

           </View>
           <Image source={{ uri: imgPath + this.state.head.poster_path }} style={{ width:width*0.3, height:height*0.25,resizeMode:'stretch',position:'absolute',marginTop:height*0.24,marginLeft:width*0.03}} />

        </View>
        <View style={{flex:0.45}}>
          <View style={{flex:2}}>
              <ScrollableTabView
                tabBarBackgroundColor="#709060"
                tabBarActiveTextColor="#fff"
                tabBarInactiveTextColor="#BDC3C7"
                tabBarTextStyle={{ fontFamily: 'Roboto', fontSize:width*0.0358 }}
                tabBarUnderlineStyle={{ backgroundColor: 'white' }}
                renderTabBar={() => <ScrollableTabBar />}>
                     <Info_detail tabLabel='INFO'  />
                      <Cast_detail tabLabel='CAST'  />
                       <Reviews_detail tabLabel='REVIEWS'  />
              </ScrollableTabView>
          </View>

        </View>
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
