
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions,
  FlatList,
  Image,
  ActivityIndicator
} from 'react-native';
const imgPath = "https://image.tmdb.org/t/p/w500/";
import {Router,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Cast_detail extends Component{
  state = {
     cast_movie:[],
      isLoading: true,

  }

  async componentDidMount()
  {

         console.log(`hitting  : https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>`);
         return fetch(`https://api.themoviedb.org/3/movie/${this.props.dataSource.id}/credits?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
           .then((response) => response.json())
           .then((responseJson) => {

             this.setState({
               isLoading: false,
               cast_movie: responseJson,


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
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{flex:1,flexDirection:'row'}}>
      <FlatList
        numColumns={1}
        data={this.state.cast_movie.cast}
        keyExtractor={(x, i) => i}
        renderItem={({item}) =>
          <View style={{flex:1,flexDirection:'row',marginTop:height*0.02,height:height*0.12}}>
              <View style={{flex:0.03}}></View>
              <View style={{flex:0.3,borderRadius:100}}>
                   <Image source={{ uri: imgPath + item.profile_path }} style={{ width:80, height:78,borderRadius:100}} />
              </View>
              <View style={{flex:0.02}}></View>
              <View style={{flex:0.3}}><Text style={{color:'black',padding:height*0.01}}>{item.name}</Text></View>
              <View style={{flex:0.05}}></View>
              <View style={{flex:0.25}}><Text style={{color:'black',padding:height*0.01}}>{item.character}</Text></View>
              <View style={{flex:0.05}}></View>
          </View>

          }
      />
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
