
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


export default class Actor extends Component{
  state = {
  }
  person_dt =(item)=>
  {
    AsyncStorage.setItem('head',JSON.stringify(item))
    Actions.Person_detail();
  }

   render() {console.log("actor: ",this.props.person)

    return (
      <View style={{flex:1,flexDirection:'column'}} >
      <FlatList
        numColumns={3}
        data={this.props.person}
        keyExtractor={(x, i) => i}
        renderItem={({item}) =>
        <TouchableOpacity onPress={()=>this.person_dt(item)}>
          <View style={{height:height*0.3,flexDirection:'column',marginTop:height*0.02,marginLeft:width*0.056,width:width*0.25,marginBottom:height*0.008}}>
              <View style={{height:height*0.25,overflow:'hidden'}}>
                   <Image  source={(item.profile_path?{uri: imgPath + item.profile_path}:require('../Images/p.jpeg'))} style={{ width:width*0.27, height:height*0.24}} />
              </View>
              <View style={{height:height*0.05,flexWrap:'wrap'}}><Text style={{color:'black',fontSize:15,fontWeight:'bold',textAlign:'center'}} numberOfLines={2}>{item.name}</Text></View>
          </View>
        </TouchableOpacity>

          }
      />
     </View>
    );
  }
}
