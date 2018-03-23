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
  ScrollView,
  FlatList
} from 'react-native';
import ScrollableTabView ,{ScrollableTabBar}from 'react-native-scrollable-tab-view'
import {Router,Actions,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
const imgPath = "https://image.tmdb.org/t/p/w500/";


import Info from './Tv_detail_tabs/Info.js'
import Cast from './Tv_detail_tabs/Cast.js'
import Reviews from './Tv_detail_tabs/Reviews.js'

export default class Tv_detail extends Component{
  state = {

     isLoading: true,
     dataSource:[],
     dataImage:[],
  }

   async componentDidMount()
   {
//https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/person/{person_id}/images?api_key=<<api_key>>
          console.log(`https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=<<api_key>>&language=en-US`);
          return fetch(`https://api.themoviedb.org/3/person/4457?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
            .then((response) => response.json())
            .then((responseJson) => {

              this.setState({
                isLoading: false,
                dataSource: responseJson,

              }, function(err, data){
                    this.setState({isLoading:false});
                    // alert(JSON.stringify(data))
              });

            })
            .catch((error) =>{
              console.error(error);
            });

            return fetch(`https://api.themoviedb.org/3/person/4457/images?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea`)
              .then((response) => response.json())
              .then((responseJson) => {

                this.setState({
                  isLoading: false,
                  dataImage: responseJson,

                }, function(err, data){
                      this.setState({isLoading:false});
                      // alert(JSON.stringify(data))
                });

              })
              .catch((error) =>{
                console.error(error);
              });

   }
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20,marginTop:height*0.48}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <View style={{flex:0.55,flexDirection:'column',position:'relative'}}>

            <View style={{flex:0.6,position:'relative'}}>
              {/*<Image source={{ uri: imgPath + this.state.dataImage.profiles.file_path }} style={{ width:width, height:height*0.38,resizeMode:'stretch',position:'relative'}} />*/}
              <Icon name='arrow-left' style={{color:'white', fontSize:24,marginTop:height*0.01,marginLeft:width*0.03,position:'absolute'}} />
              <Icon name='home' style={{color:'white', fontSize:25,marginTop:height*0.01,marginLeft:width*0.84,position:'absolute'}}/>
              <Icon name='ellipsis-v' style={{color:'white', fontSize:25,marginTop:height*0.01,marginLeft:width*0.95,position:'absolute'}}/>
            </View>

            <View style={{flex:0.4,backgroundColor:'#505830',flexDirection:'row',position:'relative'}}>

              <View style={{flex:0.38}}></View>
              <View style={{flex:0.62,flexDirection:'column'}}>
                <View style={{flex:0.15}}></View>
                <View style={{flex:0.15,flexDirection:'row'}}>
                  <View style={{flex:0.15}}></View>
                  <View style={{flex:0.05}}>
                  </View>
                  <View style={{flex:0.15}}></View>
                  <View style={{flex:0.05}}>
                  </View>
                  <View style={{flex:0.6}}></View>
                </View>
                <View style={{flex:0.35}}>
                  <Text style={{color:'white',fontSize:width*0.052,fontWeight:'bold'}}>{this.state.dataSource.name}</Text>
                </View>
                <View style={{flex:0.05}}></View>
                <View style={{flex:0.3,flexDirection:'row'}}>
                </View>
             </View>

           </View>
           <Image source={{ uri: imgPath + this.state.dataSource.profile_path }} style={{ width:width*0.3, height:height*0.25,resizeMode:'stretch',position:'absolute',marginTop:height*0.259,marginLeft:width*0.036}} />

        </View>
        <View style={{flex:0.45}}>
          <View style={{flex:2}}>
            {/*  <ScrollableTabView
                tabBarBackgroundColor="#a05868"
                tabBarActiveTextColor="#f7faff"
                tabBarInactiveTextColor="#bf8f9a"
                tabBarTextStyle={{ fontFamily: 'Roboto', fontSize:width*0.0358 }}
                tabBarUnderlineStyle={{ backgroundColor: 'white' }}
                renderTabBar={() => <ScrollableTabBar />}>
                     <Info tabLabel='INFO' dataSource={this.state.dataSource} />
                      <Cast tabLabel='CAST' dataSource={this.state.dataSource} />
                       <Reviews tabLabel='SEASONS' dataSource={this.state.dataSource}/>
              </ScrollableTabView>*/}
          </View>

        </View>
      </View>

    );
  }
}
