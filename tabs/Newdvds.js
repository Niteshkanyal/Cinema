import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {  View, TextInput, Text, Image, TouchableOpacity,ActivityIndicator,FlatList, Dimensions} from 'react-native'
// import { Actions } from 'react-native-router-flux'
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
const imgPath = "https://image.tmdb.org/t/p/w500/";

export default class Nowplaying extends Component {
      constructor(props){
            super(props);
            this.state ={
              isLoading: true,
            dataSource:''}
      }

      componentDidMount(){
  return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US&page=1')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.results,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
}

render(){

if(this.state.isLoading){
  return(
    <View style={{flex: 1, padding: 20}}>
      <ActivityIndicator/>
    </View>
  )
}

return(
  <View style={{flex:1,flexDirection:'column'}}>
    <FlatList
      numColumns={3}
      keyExtractor={(item, index) => index}
      data={this.state.dataSource}
      renderItem={({item}) =>
            <View style={{height:height*0.33,width:width*0.3,marginTop:width*0.025,marginLeft:width*0.026,backgroundColor:'lightgray',flexDirection:'column'}}>
              <View style={{flex:0.8}}>
                <TouchableOpacity>
                  <Image source={{ uri: imgPath + item.poster_path }} style={{ width:width*0.295, height:height*0.25,resizeMode:'stretch'}} />
                </TouchableOpacity>
              </View>
              <View style={{flex:0.2,flexDirection:"row"}}>
                <View style={{flex:0.8}}>
                  <Text style={{color:'black',marginLeft:width*0.015}}>{item.title}</Text>
                </View>
                <View style={{flex:0.2}}>
                  <Icon name='ellipsis-v' style={{color:'black', fontSize:17,marginTop:height*0.007,marginLeft:width*0.03}}/>
                </View>
              </View>
            </View>
        }
    />
  </View>
);
}
}
