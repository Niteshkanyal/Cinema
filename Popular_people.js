import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
  ScrollView,
  FlatList,
  TouchableOpacity

} from 'react-native';
import ScrollableTabView ,{ScrollableTabBar}from 'react-native-scrollable-tab-view'
import {Router,Actions,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
 import SideBarMenu from './SideBarMenu.js'
import Icon from 'react-native-vector-icons/FontAwesome'
const imgPath = "https://image.tmdb.org/t/p/w500/";


import Info from './Tv_detail_tabs/Info.js'
import Cast from './Tv_detail_tabs/Cast.js'
import Reviews from './Tv_detail_tabs/Reviews.js'
import Image from 'react-native-image-progress'

export default class Popular_people extends Component{
  constructor() {
          super();
          this.openDrawer = this.openDrawer.bind(this);
          this.state = {
               isLoading: true,
               dataSource:[],
               person_id:'',
         }
      }

openDrawer() {
    this.drawer.openDrawer();
}
   async componentDidMount()
   {
//https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1

          return fetch(`https://api.themoviedb.org/3/person/popular?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
            .then((response) => response.json())
            .then((responseJson) => {

              this.setState({
                isLoading: false,
                dataSource: responseJson,

              }, function(err, data){
                    this.setState({isLoading:false});
                      // alert(JSON.stringify(this.state.dataSource))
              });

            })
            .catch((error) =>{
              console.error(error);
            });
            // alert(JSON.stringify(this.state.dataSource))
   }
   callPeople = (fish,person_id)=>
   {
     // console.log(fish)
      Actions.Popular_people_detail({fish:fish},{person_id:person_id});
   }
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1,marginTop:height*0.48}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
    <DrawerLayoutAndroid
               drawerWidth={300}
               ref={(_drawer) => this.drawer = _drawer}
               drawerPosition={DrawerLayoutAndroid.positions.Left}
               renderNavigationView={() => <SideBarMenu/>}>

      <View style={{flex:1,flexDirection:'column'}}>
        <View style={{flex:0.1,flexDirection:'row',backgroundColor:'#333333'}}>
          <View>
            <Icon name='bars' style={{color:'#f7faff', fontSize:23,marginLeft:width*0.05,marginTop:height*0.028}} onPress={this.openDrawer}/>
          </View>
          <View>
            <Text style={{color:'#f7faff',fontSize:width*0.05,marginLeft:width*0.2,marginTop:height*0.026}}>Popular People</Text>
          </View>
          <View>
            <Icon name='search' style={{color:'#f7faff', fontSize:23,marginLeft:width*0.27,marginTop:height*0.028}} onPress = { () => { Actions.Search()}}/>
          </View>
        </View>
        <View style={{flex:0.9,flexDirection:'column'}}>
            <FlatList
              numColumns={1}
              data={this.state.dataSource.results}
              keyExtractor={(x, i) => i}
              renderItem={({item,index}) =>
                <TouchableOpacity onPress={()=>{this.callPeople(index,item.id)}}>
                    <View style={{height:height*0.17,flexDirection:'row',marginTop:height*0.02,}}>
                         <Image borderRadius={100} indicator={ActivityIndicator} source={{ uri: imgPath + item.profile_path }} style={{ width:100, height:100,marginLeft:width*0.036,borderRadius:100}} />
                         <Text style={{marginLeft:width*0.04,fontSize:15,fontWeight:'bold',color:"black",marginTop:height*0.056}}>{item.name}</Text>
                    </View>
                </TouchableOpacity>

                }
            />
        </View>
      </View>
     </DrawerLayoutAndroid>

    );
  }
}
