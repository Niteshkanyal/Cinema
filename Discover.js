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
  TouchableOpacity,
  Modal

} from 'react-native';
import ScrollableTabView ,{ScrollableTabBar}from 'react-native-scrollable-tab-view'
import {Router,Actions,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
 import SideBarMenu from './SideBarMenu.js'
import Icon from 'react-native-vector-icons/FontAwesome'
const imgPath = "https://image.tmdb.org/t/p/w500/";
// import Modal from 'react-native-animated-modal'


import Info from './Tv_detail_tabs/Info.js'
import Cast from './Tv_detail_tabs/Cast.js'
import Reviews from './Tv_detail_tabs/Reviews.js'
import Image from 'react-native-image-progress'



export default class Discover extends Component{
  constructor() {
          super();
          this.openDrawer = this.openDrawer.bind(this);
          this.state = {
               isLoading: true,
               dataSource:[],
               person_id:'',
               modalVisible: false,
         }
      }

openDrawer() {
    this.drawer.openDrawer();
}

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

   async componentDidMount()
   {
//https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1
//https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
          return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US`)
            .then((response) => response.json())
            .then((responseJson) => {

              this.setState({
                isLoading: false,
                dataSource: responseJson.results,

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
            <Text style={{color:'#f7faff',fontSize:width*0.05,marginLeft:width*0.2,marginTop:height*0.026}}>Discover</Text>
          </View>
          <View>
            <Icon name='filter' style={{color:'#f7faff', fontSize:23,marginLeft:width*0.2,marginTop:height*0.028}}  onPress={() => {  this.setModalVisible(true) }}/>

          </View>
          <View>
            <Icon name='sort' style={{color:'#f7faff', fontSize:23,marginLeft:width*0.05,marginTop:height*0.028}}/>
          </View>
          <View>
            <Icon name='th-list' style={{color:'#f7faff', fontSize:23,marginLeft:width*0.06,marginTop:height*0.028}}/>
          </View>

        </View>


        <Modal
          animationType="fade"
          animationIn="slideInLeft"
          animationOut="slideOutRight"
           transparent={true}
           visible={this.state.modalVisible}
           onRequestClose={() => {
             this.setModalVisible(!this.state.modalVisible);
           }}>
           <View style={styles.modalContent}  blurType='light'>
              <View style={{flex:0.11,flexDirection:'row',backgroundColor:'#333333'}}>
                 <View>
                   <Text style={{color:'#f7faff',fontSize:width*0.05,marginLeft:width*0.02,marginTop:height*0.028}}>Filters</Text>
                 </View>
                 <View>
                   <Text style={{color:'#f7faff',fontSize:width*0.05,marginLeft:width*0.45,marginTop:height*0.028}}>Apply</Text>
                 </View>

           </View>
            <View style={{flex:0.06,backgroundColor:'#d7d7d7'}}><Text style={{color:'black',padding:5}}>Your Range</Text></View>
            <View style={{flex:0.11}}></View>
            <View style={{flex:0.06,backgroundColor:'#d7d7d7'}}><Text style={{color:'black',padding:5}}>Genres</Text></View>
            <View style={{flex:0.11}}></View>

               <TouchableHighlight
                 onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                 <Icon name='times' style={{color:'red', fontSize:23,marginLeft:width*0.06,marginTop:height*0.028}}/>
               </TouchableHighlight>
           </View>
         </Modal>





        <View style={{flex:0.9,flexDirection:'column'}}>

        <FlatList
              numColumns={1}
              data={this.state.dataSource}
              keyExtractor={(x, i) => i}
              renderItem={({item,index}) =>
                <TouchableOpacity >
                    <View style={{height:height*0.25,flexDirection:'row',marginTop:height*0.02,}}>
                         <Image indicator={ActivityIndicator} source={{ uri: imgPath + item.poster_path }} style={{ width:width*0.27, height:height*0.24,marginLeft:width*0.036,borderRadius:100}} />
                         <Text style={{marginLeft:width*0.04,fontSize:15,fontWeight:'bold',color:"black",marginTop:height*0.056}}>{item.title}</Text>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
     justifyContent: 'center',
     backgroundColor:'white',
    //backgroundColor: '#F5FCFF',
  },
  modalContent: {
  marginTop:0,
  marginLeft:width*0.2,
  flexDirection:'column',
  flex:1,
  backgroundColor:'#f7faff',
  borderColor: "rgba(2, 4, 33, 0.4)"
},
});
