
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
  ActivityIndicator
} from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Reviews_detail extends Component{
  state = {
     reviews_movie:[],
      isLoading: true,
      noitem:'NO DATA',
  }

  async componentDidMount()
  {

         console.log(`hitting  : https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1`);
         return fetch(`https://api.themoviedb.org/3/movie/${this.props.dataSource.id}/reviews?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
           .then((response) => response.json())
           .then((responseJson) => {

             this.setState({
               isLoading: false,
               reviews_movie: responseJson,


             }, function(err,data){

                   this.setState({isLoading:false});
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
      <View style={{flex:1,flexDirection:'row'}}>
      <FlatList
        numColumns={1}
        data={this.state.reviews_movie.results}
        keyExtractor={(x, i) => i}
        renderItem={({item}) =>
          <View style={{flexDirection:'column',marginTop:height*0.01,padding:width*0.03}}>
            <Text style={{fontSize:15,fontWeight:'bold',padding:5}}>{!item.author?this.state.noitem:item.author}</Text>
            <Text style={{padding:5}}>{!item.content?'':item.content}</Text>
          </View>

          }
      />
      </View>
    );
  }
}
