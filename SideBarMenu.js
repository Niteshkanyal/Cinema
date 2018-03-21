
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');

export default class SideBarMenu extends Component{
render() {
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <View style={{flex:0.25,backgroundColor:'#2d2f31',flexDirection:'column'}}>
          <View style={{flex:0.5}}></View>
          <View style={{flex:0.5,flexDirection:'row',marginBottom:5}}>
              <View style={{flex:0.1}}></View>
              <View style={{flex:0.2}}>
                <Icon name='imdb' style={{color:'#00984f', fontSize:60}}/>
              </View>
              <View style={{flex:0.01}}></View>
              <View style={{flex:0.69}}><Text style={{color:'white',fontSize:15,marginTop:height*0.025}}>Connect to IMDB</Text></View>
          </View>
        </View>
        <View style={{flex:0.75,flexDirection:'column'}}>
          <View style={{flex:0.025}}></View>
          <View style={{flex:0.1,flexDirection:"row",marginTop:height*0.01}}>
            <View style={{flex:0.05}}></View>
            <View style={{flex:0.1}}><Icon name='film' style={{color:'#00984f', fontSize:25}}/></View>
            <View style={{flex:0.13}}></View>
            <View style={{flex:0.72}}>
              <Text style={{color:'gray',fontSize:17}}>Movies</Text>
            </View>
          </View>
          <View style={{flex:0.1,flexDirection:"row",marginTop:height*0.01}}>
            <View style={{flex:0.05}}></View>
            <View style={{flex:0.1}}><Icon name='tv' style={{color:'#00984f', fontSize:25}}/></View>
            <View style={{flex:0.13}}></View>
            <View style={{flex:0.72}}>
              <Text style={{color:'gray',fontSize:17}}>TV Shows</Text>
            </View>
          </View>
          <View style={{flex:0.1,flexDirection:"row",marginTop:height*0.01}}>
            <View style={{flex:0.05}}></View>
            <View style={{flex:0.1}}><Icon name='search' style={{color:'#00984f', fontSize:25}}/></View>
            <View style={{flex:0.13}}></View>
            <View style={{flex:0.72}}>
              <Text style={{color:'gray',fontSize:17}}>Discover</Text>
            </View>
          </View>
          <View style={{flex:0.1,flexDirection:"row",marginTop:height*0.01}}>
            <View style={{flex:0.05}}></View>
            <View style={{flex:0.1}}><Icon name='user' style={{color:'#00984f', fontSize:25}}/></View>
            <View style={{flex:0.13}}></View>
            <View style={{flex:0.72}}>
              <Text style={{color:'gray',fontSize:17}}>Popular People</Text>
            </View>
          </View>
          <View style={{flex:0.15,flexDirection:"row",borderWidth:0.3,borderBottomColor:'lightgray',borderTopColor:'lightgray',borderRightColor:'white',borderLeftColor:'white'}}>
            <View style={{flex:0.05}}></View>
            <View style={{flex:0.1}}><Icon name='calendar' style={{color:'#00984f', fontSize:25,marginTop:height*0.025}}/></View>
            <View style={{flex:0.13}}></View>
            <View style={{flex:0.72}}>
              <Text style={{color:'gray',fontSize:17,marginTop:height*0.025}}>Reminders</Text>
            </View>
          </View>
          <View style={{flex:0.1,flexDirection:"row",marginTop:height*0.01}}>
            <View style={{flex:0.05}}></View>
            <View style={{flex:0.1}}><Icon name='question-circle' style={{color:'#00984f', fontSize:25}}/></View>
            <View style={{flex:0.13}}></View>
            <View style={{flex:0.72}}>
              <Text style={{color:'gray',fontSize:17}}>Contact Developer</Text>
            </View>
          </View>
          <View style={{flex:0.1,flexDirection:"row",marginTop:height*0.01}}>
            <View style={{flex:0.05}}></View>
            <View style={{flex:0.1}}><Icon name='google-plus' style={{color:'#00984f', fontSize:22}}/></View>
            <View style={{flex:0.13}}></View>
            <View style={{flex:0.72}}>
              <Text style={{color:'gray',fontSize:17}}>Google+ Community</Text>
            </View>
          </View>
          <View style={{flex:0.1,flexDirection:"row",marginTop:height*0.02}}>
            <View style={{flex:0.05}}></View>
            <View style={{flex:0.1}}><Icon name='unlock-alt' style={{color:'#00984f', fontSize:25}}/></View>
            <View style={{flex:0.13}}></View>
            <View style={{flex:0.72}}>
              <Text style={{color:'gray',fontSize:17}}>Unlock Pro</Text>
            </View>
          </View>
          <View style={{flex:0.1,flexDirection:"row",marginTop:height*0.02}}>
            <View style={{flex:0.05}}></View>
            <View style={{flex:0.1}}><Icon name='cog' style={{color:'#00984f', fontSize:25}}/></View>
            <View style={{flex:0.13}}></View>
            <View style={{flex:0.72}}>
              <Text style={{color:'gray',fontSize:17}}>Settings</Text>
            </View>
          </View>
          <View style={{flex:0.025}}></View>
        </View>
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
