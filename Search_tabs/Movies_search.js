
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
          <View style={{height:height*0.33,flexDirection:'column',marginTop:height*0.02,marginLeft:width*0.056,width:width*0.25,marginBottom:height*0.008}}>
              <View style={{height:height*0.25}}>
                   <Image source={(item.poster_path?{uri: imgPath + item.poster_path}:require('../Images/reel.png'))} style={{ width:width*0.27, height:height*0.24}} />
              </View>
              <View style={{height:height*0.05,flexWrap:'wrap'}}><Text style={{color:'black',fontSize:15,fontWeight:'bold'}} numberOfLines={3}>{item.original_title}</Text></View>
          </View>
        </TouchableOpacity>

          }
      />
      </View>
    );
  }
}
