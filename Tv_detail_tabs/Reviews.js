
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
  Image
} from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
const imgPath = "https://image.tmdb.org/t/p/w500/";


export default class Reviews extends Component{
  state = {
     seasons_tv:[],
      isLoading: true,

  }

  async componentDidMount()
  {

         console.log(`hitting  : https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>`);
         return fetch(`https://api.themoviedb.org/3/tv/${this.props.dataSource.id}/credits?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
           .then((response) => response.json())
           .then((responseJson) => {

             this.setState({
               isLoading: false,
               seasons_tv: responseJson,


             }, function(err,data){

                   this.setState({isLoading:false});
                   // alert(JSON.stringify(this.props.dataSource))
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

      return(
        <View style={{flex:1,flexDirection:'column'}}>
        <FlatList
          numColumns={1}
          data={this.props.dataSource.seasons}
          keyExtractor={(x, i) => i}
          renderItem={({item}) =>
            <View style={{flex:1,flexDirection:'column',marginTop:height*0.02}}>
                <View style={{flex:0.1,flexDirection:'row'}}>
                  <View style={{flex:0.05}}></View>
                  <View style={{flex:0.3}}><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>SEASON {item.season_number}</Text></View>
                  <View style={{flex:0.3}}><Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>{item.episode_count} episodes</Text></View>
                  <View style={{flex:0.3}}></View>
                </View>
                <View>
                   <Image source={{ uri: imgPath + item.poster_path }} style={{marginLeft:width*0.05,height:height*0.3,width:width*0.9 ,resizeMode:'stretch'}} />
                </View>

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
