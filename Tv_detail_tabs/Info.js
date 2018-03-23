
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions,
  ScrollerView,
  Image,
  AsyncStorage,ScrollView,
  FlatList
} from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Info extends Component{
  state = {
  }
  async componentDidMount()
  {
          // alert(JSON.stringify(this.props.dataSource))
  }
  render() {
    return (
      <View style={{flex:1,flexDirection:'column',backgroundColor:'#f7faff'}}>
        <ScrollView>
        <View style={{flex:0.1,marginTop:height*0.02}}></View>
        <View style={{flex:0.24,flexDirection:'row'}}>
          <View style={{flex:0.05}}></View>
          <View style={{flex:0.12}}>
            <Icon name='star' style={{color:'#b6e5d9', fontSize:35,marginTop:height*0.007,marginLeft:width*0.02}}/>
            <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>Rate</Text>
          </View>
          <View style={{flex:0.036}}></View>
          <View style={{flex:0.12}}>
            <Image source={require('../Images/tmdb1.png')} style={{height:height*0.062,width:width*0.11,resizeMode:'stretch'}}/>
            <Text style={{fontSize:13,color:'black',textAlign:'center',fontWeight:'bold'}}>{this.props.dataSource.vote_average}</Text>
          </View>
          <View style={{flex:0.036}}></View>
          <View style={{flex:0.12}}>
              <Image source={require('../Images/imdb.png')}style={{height:height*0.062,width:width*0.11,resizeMode:'stretch'}}/>
                <Text style={{fontSize:13,color:'black',textAlign:'center',fontWeight:'bold'}}>7.8</Text>
          </View>
          <View style={{flex:0.043}}></View>
          <View style={{flex:0.116}}>
              <Image source={require('../Images/apple.png')}style={{height:height*0.062,width:width*0.11,resizeMode:'stretch'}}/>
                <Text style={{fontSize:13,color:'black',textAlign:'center',fontWeight:'bold'}}>78%</Text>
          </View>
          <View style={{flex:0.033}}></View>
          <View style={{flex:0.12}}>
              <Image source={require('../Images/popcorn.jpeg')}style={{height:height*0.063,width:width*0.12,resizeMode:'stretch'}}/>
                <Text style={{fontSize:13,color:'black',textAlign:'center',fontWeight:'bold'}}>80%</Text>
          </View>
          <View style={{flex:0.036}}></View>
          <View style={{flex:0.12,backgroundColor:'#66cc33',height:height*0.069}}>
              <Text style={{fontSize:13,color:'white',textAlign:'center',fontWeight:'bold',marginTop:height*0.025}}>78</Text>
          </View>
          <View style={{flex:0.05}}></View>
        </View>
        <View style={{flex:0.2}}></View>
        <View style={{flex:0.5,flexDirection:'column'}}>
          <View style={{flex:0.3,marginLeft:width*0.044,marginTop:height*0.045,marginRight:width*0.02}}><Text style={{fontSize:width*0.035,color:'#010100'}}>{this.props.dataSource.overview}</Text></View>
          <View style={{flex:0.05}}></View>
          <View style={{flex:0.25,padding:20,flexDirection:'column'}}>
              <View>
                  <Text style={{}}><Text style={{color:'black',fontWeight:'bold'}}>First Air Date: </Text>{this.props.dataSource.first_air_date}</Text>

                  <Text style={{}}><Text style={{color:'black',fontWeight:'bold'}}>Last Air Date: </Text>{this.props.dataSource.last_air_date}</Text>
              </View>
              <View style={{flex:0.2,flexDirection:'row'}}>
                <View style={{flex:0.2}}>
                  <Text style={{color:'black',fontWeight:'bold'}}>Networks: </Text>
                </View>
                <View style={{flex:0.8}}>
                    <FlatList
                      numColumns={3}
                      data={this.props.dataSource.networks}
                      keyExtractor={(x, i) => i}
                      renderItem={({item}) =>
                              <Text style={{color:'black'}}>{item.name?item.name:'N/A'}, </Text>
                        }
                    />
                </View>
              </View>
              <View style={{flex:0.2,flexDirection:'row'}}>
                <View style={{flex:0.2}}>
                  <Text style={{color:'black',fontWeight:'bold'}}>Created By: </Text>
                </View>
                <View style={{flex:0.8}}>
                    <FlatList
                      numColumns={3}
                      data={this.props.dataSource.created_by}
                      keyExtractor={(x, i) => i}
                      renderItem={({item}) =>
                              <Text style={{color:'black'}}>{item.name?item.name:'N/A'}, </Text>
                        }
                    />
                  </View>
              </View>
              <View>
                  <Text style={{padding:2}}><Text style={{color:'black',fontWeight:'bold'}}>Show Type: </Text>{this.props.dataSource.type}</Text>
                  <Text style={{padding:2}}><Text style={{color:'black',fontWeight:'bold'}}>Show Status: </Text>{this.props.dataSource.status}</Text>
              </View>
          </View>
          <View style={{flex:0.7}}></View>
        </View>
        </ScrollView>
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
