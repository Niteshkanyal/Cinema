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


import Info from './Popular_tabs/Info.js'
import Cast from './Popular_tabs/Movies.js'
import Reviews from './Popular_tabs/Tv.js'
import Image from 'react-native-image-progress'

export default class Popular_people_detail extends Component{
  state = {
     head:'',
     isLoading: true,
     dataSource:[],
     dataSource_one:[],
     id_act:'',
     ind:'',
  }

   async componentDidMount()
   {

          console.log(`https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US`);
          return fetch(`https://api.themoviedb.org/3/person/popular?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
            .then((response) => response.json())
            .then((responseJson) => {

              this.setState({
                isLoading: false,
                dataSource: responseJson.results[this.props.fish],
                dataSource_one:responseJson.results[this.props.fish].known_for[1],
                id_act:responseJson.results[this.props.fish].id,
                ind:this.props.fish,

              }, function(err, data){
                    this.setState({isLoading:false});
                    // alert(JSON.stringify(this.state.dataSource))
              });

            })
            .catch((error) =>{
              console.error(error);
            });


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

            <View style={{flex:0.6,position:'relative'}}>
              <Image indicator={ActivityIndicator} source={{ uri: imgPath + this.state.dataSource_one.backdrop_path}} style={{ width:width, height:height*0.38,position:'relative'}} />
              <Icon name='arrow-left' style={{color:'white', fontSize:24,marginTop:height*0.01,marginLeft:width*0.03,position:'absolute'}} onPress={()=>Actions.pop()}/>
              <Icon name='home' style={{color:'white', fontSize:25,marginTop:height*0.01,marginLeft:width*0.8,position:'absolute'}} onPress={()=>Actions.popTo('Moviesview')}/>
              <Icon name='ellipsis-v' style={{color:'white', fontSize:25,marginTop:height*0.01,marginLeft:width*0.95,position:'absolute'}}/>
            </View>

            <View style={{flex:0.4,backgroundColor:'#382030',flexDirection:'row',position:'relative'}}>

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
           <Image indicator={ActivityIndicator} source={{ uri: imgPath + this.state.dataSource.profile_path }} style={{ width:width*0.3, height:height*0.25,position:'absolute',marginTop:height*0.259,marginLeft:width*0.036}} />

        </View>
        <View style={{flex:0.45}}>
          <View style={{flex:2}}>
              <ScrollableTabView
                tabBarBackgroundColor="#6880a8"
                tabBarActiveTextColor="#f7faff"
                tabBarInactiveTextColor="#99a9c4"
                tabBarTextStyle={{ fontFamily: 'Roboto', fontSize:width*0.037 }}
                tabBarUnderlineStyle={{ backgroundColor: 'white' }}
                renderTabBar={() => <ScrollableTabBar />}>
                     <Info tabLabel='INFO' id_act={this.state.id_act}/>
                      <Cast tabLabel='MOVIES' ind={this.state.ind}/>
                       <Reviews tabLabel='TV SHOWS' id_act={this.state.id_act}/>
              </ScrollableTabView>
          </View>

        </View>
      </View>

    );
  }
}
