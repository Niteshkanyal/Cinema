
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
  AsyncStorage,TouchableOpacity

} from 'react-native';
const imgPath = "https://image.tmdb.org/t/p/w500/";
import {Router,Scene,Stack,Actions} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import Image from 'react-native-image-progress'


export default class Cast extends Component{
  state = {
     cast_tv:[],
      isLoading: true,

  }
  person_dt =(item)=>
  {
    AsyncStorage.setItem('head',JSON.stringify(item))
    Actions.Person_detail();
  }

  async componentDidMount()
  {

         console.log(`hitting  : https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>`);
         return fetch(`https://api.themoviedb.org/3/tv/${this.props.dataSource.id}/credits?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
           .then((response) => response.json())
           .then((responseJson) => {

             this.setState({
               isLoading: false,
               cast_tv: responseJson,


             }, function(err,data){

                   this.setState({isLoading:false});
                   // alert(JSON.stringify(this.state.cast_movie.cast))
             });

           })
           .catch((error) =>{
             console.error(error);
           });

  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1,marginTop:100}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{flex:1,flexDirection:'row'}}>
      <FlatList
        numColumns={1}
        data={this.state.cast_tv.cast}
        keyExtractor={(x, i) => i}
        renderItem={({item}) =>
        <TouchableOpacity onPress={()=>this.person_dt(item)}>
          <View style={{flex:1,flexDirection:'row',marginTop:height*0.02,height:height*0.125}}>
              <View style={{flex:0.03}}></View>
              <View style={{flex:0.3,borderRadius:100}}>
                   <Image Image borderRadius={100} indicator={ActivityIndicator} source={{ uri: imgPath + item.profile_path }} style={{ width:80, height:78,borderRadius:100}} />
              </View>
              <View style={{flex:0.02}}></View>
              <View style={{flex:0.3}}><Text style={{color:'black',fontWeight:'bold',padding:height*0.01}}>{item.name}</Text></View>
              <View style={{flex:0.05}}></View>
              <View style={{flex:0.25}}><Text style={{fontStyle:'italic',padding:height*0.01}}>as {item.character}</Text></View>
              <View style={{flex:0.05}}></View>
          </View>
        </TouchableOpacity>

          }
      />
      </View>
    );
  }
}
