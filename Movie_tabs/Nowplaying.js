import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {  View, TextInput,AsyncStorage,Text, TouchableHighlight,TouchableOpacity,ActivityIndicator,FlatList, Dimensions} from 'react-native'
import { Actions } from 'react-native-router-flux'
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
const imgPath = "https://image.tmdb.org/t/p/w500/";
import Detailpage from '../Detailpage.js'
import Image from 'react-native-image-progress'


export default class Nowplaying extends Component {
      constructor(props){
            super(props);
            this.state ={
              isLoading: true,
              dataSource:'',
          }
      }


    async componentDidMount()
    {
            //  https://api.themoviedb.org/3/movie/now_playing?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US&page=1
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
    detail =(item)=>
    {
      AsyncStorage.setItem('head',JSON.stringify(item))
      Actions.Detailpage();
    }

render(){
  console.log(this.state.dataSource)

if(this.state.isLoading){
  return(
    <View style={{flex: 1,marginTop:height*0.34}}>
      <ActivityIndicator/>
    </View>
  )
}
let html_='';
if(this.props.listflip)
{
  html_=(
    <View style={{flex:1,flexDirection:'column',backgroundColor:'#f7faff'}}>
      <FlatList
        numColumns={1}
        keyExtractor={(item, index) => index}
         key={`${this.props.listflip?item => item.id+'d'.toString():item=>item.id+'s'}`}
        data={this.state.dataSource}
        renderItem={({item}) =>
          <TouchableOpacity  onPress={()=>this.detail(item)}>
              <View style={{height:height*0.22,width:width*0.95,marginTop:width*0.025,marginLeft:width*0.026,backgroundColor:'white',flexDirection:'row',borderWidth:0.3,borderBottomColor:'gray',borderLeftColor:'white',borderTopColor:'white',borderRightColor:'white'}}>
                <View style={{flex:0.3}}>
                    <Image indicator={ActivityIndicator} source={{ uri: imgPath + item.poster_path }} style={{ width:width*0.25, height:height*0.2}} />
                </View>
                <View style={{flex:0.7,flexDirection:"column"}}>
                  <View style={{flex:0.1}}></View>
                  <View style={{flex:0.1}}><Text style={{fontSize:width*0.03,fontWeight:'bold',color:'black',marginLeft:width*0.018}}>{new Date(item.release_date).getFullYear()}</Text></View>
                  <View style={{flex:0.15,flexWrap:'wrap'}}>
                    <Text style={{color:'black',fontSize:width*0.04,marginLeft:width*0.015}} numberOfLines={1}>{item.title}</Text>
                  </View>
                  <View style={{flex:0.3,flexDirection:'row'}}>
                    <View style={{flex:0.2}}>
                        <Icon name='heart' style={{color:'red', fontSize:25,marginTop:height*0.0089,marginLeft:width*0.02}}/>
                    </View>
                    <View style={{flex:0.8}}>
                      <Text style={{marginTop:height*0.012}}>{item.vote_count}</Text>
                    </View>
                  </View>
                  <View style={{flex:0.35,flexDirection:'row'}}>
                    <View style={{flex:0.2}}>
                      <Icon name='imdb' style={{color:'#00984f', fontSize:35,marginTop:height*0.007,marginLeft:width*0.02}}/>
                    </View>
                    <View style={{flex:0.1}}><Text style={{fontSize:width*0.04,marginTop:height*0.02}}>{item.vote_average}</Text></View>
                    <View style={{flex:0.7}}></View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          }
      />
    </View>

  )
}else{
  html_=(
    <View style={{flex:1,flexDirection:'column',backgroundColor:'#f7faff'}}>
      <FlatList
        numColumns={3}

         key={`${this.props.listflip?item => item.id+'d'.toString():item=>item.id+'s'}`}
        data={this.state.dataSource}
        renderItem={({item}) =>
          <TouchableOpacity  onPress={()=>this.detail(item)}>
              <View style={{height:height*0.33,width:width*0.3,marginTop:width*0.02,marginLeft:width*0.026,backgroundColor:'#d7d7d7',flexDirection:'column',marginBottom:height*0.008}}>
                <View style={{flex:0.8}}>
                    <Image source={{ uri: imgPath + item.poster_path }} style={{ width:width*0.3, height:height*0.25}} />
                </View>
                <View style={{flex:0.2,flexDirection:"row"}}>
                  <View style={{flex:0.8,flexWrap:'wrap'}}>
                    <Text style={{color:'#1c1c1c',marginLeft:width*0.015}}numberOfLines={2}>{item.title}</Text>
                  </View>
                  <View style={{flex:0.2}}>
                    <Icon name='ellipsis-v' style={{color:'black', fontSize:17,marginTop:height*0.007,marginLeft:width*0.03}}/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          }
      />
    </View>

  )
}
return(
<View style={{flex:1}}>
  {html_}
</View>
);
}
}
