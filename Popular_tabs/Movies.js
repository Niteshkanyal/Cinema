
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

} from 'react-native';
const imgPath = "https://image.tmdb.org/t/p/w500/";
import {Router,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import Image from 'react-native-image-progress'


export default class Movies extends Component{
  state = {
      isLoading:true,
      dataSource_movie:[],

  }
  async componentDidMount()
  {

         console.log(`https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US`);
         return fetch(`https://api.themoviedb.org/3/person/popular?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
           .then((response) => response.json())
           .then((responseJson) => {

             this.setState({
               isLoading: false,
               dataSource_movie:responseJson.results[this.props.ind].known_for,
             }, function(err, data){
                   this.setState({isLoading:false});
                   // alert(JSON.stringify(this.state.dataSource_movie))
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
      <FlatList
        numColumns={3}
        data={this.state.dataSource_movie}
        keyExtractor={(x, i) => i}
        renderItem={({item}) =>
          <View style={{height:height*0.43,flexDirection:'column',marginTop:height*0.02,marginLeft:width*0.056,width:width*0.25}}>
              <View style={{height:height*0.25}}>
                   <Image indicator={ActivityIndicator} source={{ uri: imgPath + item.poster_path }} style={{ width:width*0.27, height:height*0.24}} />
              </View>
              <View style={{height:height*0.05,flexWrap:'wrap'}}><Text style={{color:'black',fontSize:15,fontWeight:'bold'}} numberOfLines={3}>{item.original_title}</Text></View>
          </View>

          }
      />
      </View>
    );
  }
}
