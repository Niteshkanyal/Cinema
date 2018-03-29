
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  AsyncStorage

} from 'react-native';
const imgPath = "https://image.tmdb.org/t/p/w500/";
import {Router,Scene,Stack,Actions} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
// import Image from 'react-native-image-progress'


export default class Movies extends Component{
  state = {

  }
  detail =(item)=>
  {
    AsyncStorage.setItem('head',JSON.stringify(item))
    Actions.Detailpage();
  }

  render() {  console.log("movies: ",this.props.movies);

    return (
      <View style={{flex:1,flexDirection:'column'}} >

      <FlatList
        numColumns={3}
        data={this.props.movies}
        keyExtractor={(x, i) => i}
        renderItem={({item}) =>
        <TouchableOpacity  onPress={()=>this.detail(item)}>
          <View style={{height:height*0.32,flexDirection:'column',marginTop:height*0.015,marginLeft:width*0.03,width:width*0.294,backgroundColor:'#d7d7d7',marginBottom:width*0.02}}>
              <View style={{height:height*0.25}}>
                   <Image source={(item.poster_path?{uri: imgPath + item.poster_path}:require('../Images/reel.png'))} style={{  width:width*0.294, height:height*0.24}} />
              </View>
              <View style={{height:height*0.05,flexWrap:'wrap'}}><Text style={{color:'black',fontSize:15,textAlign:'center',padding:3}} numberOfLines={2}>{item.original_title}</Text></View>
          </View>
        </TouchableOpacity>

          }
      />
      </View>
    );
  }
}
