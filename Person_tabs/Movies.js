
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
  TouchableOpacity,
  AsyncStorage

} from 'react-native';
const imgPath = "https://image.tmdb.org/t/p/w500/";
import {Router,Scene,Stack,Actions} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import Image from 'react-native-image-progress'


export default class Movies extends Component{
  state = {
      isLoading:true,
      dataSource_movie:[],

  }
  detail =(item)=>
  {
    AsyncStorage.setItem('head',JSON.stringify(item))
    Actions.Detailpage();
  }

  async componentDidMount()
  {
      let d=this.props.head.id
         console.log(`https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=<<api_key>>&language=en-US`);
         return fetch('https://api.themoviedb.org/3/person/'+d+'/movie_credits?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US')
           .then((response) => response.json())
           .then((responseJson) => {

             this.setState({
               isLoading: false,
               dataSource_movie:responseJson.cast,
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
        <View style={{flex: 1, marginTop:100}}>
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
        <TouchableOpacity onPress={()=>this.detail(item)}>
          <View style={{height:height*0.32,flexDirection:'column',marginTop:height*0.015,marginLeft:width*0.03,width:width*0.294,backgroundColor:'#d7d7d7',marginBottom:width*0.02}}>
              <View style={{height:height*0.25}}>
                   <Image indicator={ActivityIndicator} source={{ uri: imgPath + item.poster_path }} style={{ width:width*0.294, height:height*0.24}} />
              </View>
              <View style={{height:height*0.05,flexWrap:'wrap'}}><Text style={{color:'black',fontSize:15,fontWeight:'bold',textAlign:'center',padding:3}} numberOfLines={2}>{item.original_title}</Text></View>
          </View>
        </TouchableOpacity>

          }
      />
      </View>
    );
  }
}
