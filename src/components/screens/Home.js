//import liraries
import React, {Component} from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';

// create a component
const Home = () => {
  return (
    <View
      style={{
        marginVertical: 40,
        height: '100%',
      }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <FontAwesome name="plus-square-o" style={{fontSize: 24}} />
        <Text style={{fontSize: 25, fontWeight: '500'}}>Instagram</Text>
        <Feather name="navigation" style={{fontSize: 24}} />
      </View>

      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Home;
