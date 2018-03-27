import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {  View, BackgroundImage, ScrollView,TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import Movies from './Search_tabs/Movies_search.js';
import Actor from './Search_tabs/Actor_search.js';
import Tv from './Search_tabs/Tv_search.js';

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
var { height, width } = Dimensions.get('window');


export default class Search extends Component {
      constructor(props) {
            super(props);
            this.state = {
              query:'',
              data:[],
              movies:[],
              tv:[],
              person:[]
            }
      }
      filterData=(dataArry,filter)=>{
        let obj=[];
         _.filter(dataArry,(item)=>{
           if(item.media_type==filter)
            obj.push(item);
         })
         return obj;
      }

      search=async (qry)=>{
        //https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
        await fetch('https://api.themoviedb.org/3/search/multi?api_key=ca7d5b4e1ef2579d75ffd62fd445e6ea&language=en-US&page=1&include_adult=false&query=' + qry)
          .then((response) => response.json())
          .then((responseJson) => {
              data = responseJson.results;
              this.setState({
                data:data,
                movies:this.filterData(data,'movie'),
                tv:this.filterData(data,'tv'),
                person:this.filterData(data,'person')
              })
          })
          .catch(function (error) {
            console.log("error");
          });
      }

      render() {
            return (
               // <ScrollView style={{flex:1}}>
                  <View style={{flex:1,flexDirection:'column'}}>

                                    <View style={{ flexDirection: 'row' ,backgroundColor:"#333435"}}>

                                          <View style={{ margin: 10, flex: 0.15 }}>
                                                <TouchableOpacity onPress={() => { Actions.pop() }}  >
                                                      <Icon name="arrow-left" size={24} color="#fff" style={{ padding: 5 }} />
                                                </TouchableOpacity>
                                          </View >
                                          <View style={{ margin: 10, flex: 0.08 }}>
                                                <Icon name="search" size={20} color="#fff" style={{ padding: 5 }} />
                                          </View>
                                          <View style={{ marginLeft: 0, marginRight: 0, marginBottom: 10, flex: 0.6 }}>
                                              <KeyboardAwareScrollView>
                                                <TextInput
                                                placeholder={"Search " + "..."}
                                                placeholderTextColor="#BDC3C7"
                                                underlineColorAndroid="transparent"
                                                style={{ borderBottomColor: "#BDC3C7",
                                                color: "#fff", borderBottomWidth: 2 ,fontSize:18}}
                                                autoFocus
                                                onChangeText={(text) => {
                                                  this.setState({ query: text });
                                                  this.search(text)
                                                }} />
                                              </KeyboardAwareScrollView>
                                          </View>


                                      </View>


                              <View style={{flex:1}}>

                                  <ScrollableTabView
                                        tabBarBackgroundColor="#333435"
                                        tabBarActiveTextColor="#fff"
                                        tabBarInactiveTextColor="#BDC3C7"
                                        tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: 15 }}
                                        tabBarUnderlineStyle={{ backgroundColor: '#3FC380' }}
                                        renderTabBar={() => <ScrollableTabBar />}>
                                        <Movies tabLabel="MOVIES" movies={this.state.movies}/>
                                        <Actor tabLabel="ACTORS" person={this.state.person}/>
                                        <Tv tabLabel="TV SHOWS" tv={this.state.tv}/>
                                  </ScrollableTabView>

                              </View>

                  </View>
                      // </ScrollView>
            )
      }

}
