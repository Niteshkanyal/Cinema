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
  ScrollView,
  FlatList
} from 'react-native';
import ScrollableTabView ,{ScrollableTabBar}from 'react-native-scrollable-tab-view'
import {Router,Actions,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
const imgPath = "https://image.tmdb.org/t/p/w500/";
import Image from 'react-native-image-progress'


import Info from './Tv_detail_tabs/Info.js'
import Cast from './Tv_detail_tabs/Cast.js'
import Reviews from './Tv_detail_tabs/Reviews.js'

export default class Tv_detail extends Component{
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

          console.log(`hitting  : https://api.themoviedb.org/3/tv/${this.state.head.id}?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`);
          return fetch(`https://api.themoviedb.org/3/tv/${this.state.head.id}?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
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
    AsyncStorage.setItem('mydata',JSON.stringify(this.state.dataSource))
   }
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1,marginTop:height*0.48}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <View style={{flex:0.55,flexDirection:'column',position:'relative'}}>

            <View style={{flex:0.6,position:'relative'}}>
              <Image indicator={ActivityIndicator} source={{ uri: imgPath + this.state.dataSource.backdrop_path }} style={{ width:width, height:height*0.38,position:'relative'}} />
              <Icon name='arrow-left' style={{color:'white', fontSize:24,marginTop:height*0.01,marginLeft:width*0.03,position:'absolute'}} onPress={()=>Actions.pop()}/>
              <Icon name='home' style={{color:'white', fontSize:25,marginTop:height*0.01,marginLeft:width*0.7,position:'absolute'}} onPress={()=>Actions.popTo('TVviews')}/>
              <Icon name='share-alt' style={{color:'white', fontSize:20,marginTop:height*0.014,marginLeft:width*0.824,position:'absolute'}}/>
              <Icon name='ellipsis-v' style={{color:'white', fontSize:25,marginTop:height*0.01,marginLeft:width*0.95,position:'absolute'}}/>
            </View>

            <View style={{flex:0.4,backgroundColor:'#383030',flexDirection:'row',position:'relative'}}>

              <View style={{flex:0.38}}></View>
              <View style={{flex:0.62,flexDirection:'column'}}>
                <View style={{flex:0.15}}></View>
                <View style={{flex:0.15,flexDirection:'row'}}>
                  <View style={{flex:0.15}}><Text style={{color:'#7f898f'}}>N/A</Text></View>
                  <View style={{flex:0.05}}>
                    <Icon name='circle' style={{color:'#7f898f', fontSize:7,marginTop:height*0.01}}/>
                  </View>
                  <View style={{flex:0.15}}><Text style={{color:'#7f898f'}}>{new Date(this.state.dataSource.first_air_date).getFullYear()}</Text></View>
                  <View style={{flex:0.05}}>
                    <Icon name='circle' style={{color:'#7f898f', fontSize:7,marginTop:height*0.01}}/>
                  </View>
                  <View style={{flex:0.6}}><Text style={{color:'#7f898f'}}>{this.state.dataSource.episode_run_time[0]} mins</Text></View>
                </View>
                <View style={{flex:0.35}}>
                  <Text style={{color:'white',fontSize:width*0.052,fontWeight:'bold'}}>{this.state.dataSource.name}</Text>
                </View>
                <View style={{flex:0.05}}></View>
                <View style={{flex:0.3,flexDirection:'row'}}>
                    <FlatList
                      numColumns={3}
                      data={this.state.dataSource.genres}
                      keyExtractor={(x, i) => i}
                      renderItem={({item}) =>
                              <Text style={{color:'#f7faff'}}>{item.name}, </Text>
                        }
                    />
                </View>
             </View>

           </View>
           <Image indicator={ActivityIndicator} source={{ uri: imgPath + this.state.dataSource.poster_path }} style={{ width:width*0.3, height:height*0.25,position:'absolute',marginTop:height*0.259,marginLeft:width*0.036}} />

        </View>
        <View style={{flex:0.45}}>
          <View style={{flex:2}}>
              <ScrollableTabView
                tabBarBackgroundColor="#a05868"
                tabBarActiveTextColor="#f7faff"
                tabBarInactiveTextColor="#bf8f9a"
                tabBarTextStyle={{ fontFamily: 'Roboto', fontSize:width*0.037 }}
                tabBarUnderlineStyle={{ backgroundColor: 'white' }}
                renderTabBar={() => <ScrollableTabBar />}>
                     <Info tabLabel='INFO' dataSource={this.state.dataSource} />
                      <Cast tabLabel='CAST' dataSource={this.state.dataSource} />
                       <Reviews tabLabel='SEASONS' dataSource={this.state.dataSource}/>
              </ScrollableTabView>
          </View>

        </View>
      </View>

    );
  }
}
