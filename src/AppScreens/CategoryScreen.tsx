import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import HorizontalFlatList from './components/HorizontalFlatList';
import { globalStyles } from '../global';
import StyledFlatList from './components/StyledFlatList';
import Searchnav from './components/searchnav';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const isTablet = screenWidth >= 768;


const CategoryScreen = () => (
  <ScrollView style={[globalStyles.main]}>
    <View style={[globalStyles.container,styles.main]}>
      <View style={styles.headr}>
        <Text style={globalStyles.cinema}>Discover New</Text>
        <TouchableOpacity>
          <Image source={require('../assets/search.png')} />
        </TouchableOpacity>
      </View>
      <Text style={globalStyles.movieheading}>Created For You</Text>
      <StyledFlatList />
      <Text style={globalStyles.movieheading}>Bollywood</Text>
      <StyledFlatList />
      <Text style={globalStyles.movieheading}>Hollywood</Text>
      <StyledFlatList />
    </View>

  </ScrollView>
);

const styles = StyleSheet.create({
  main: {
    marginBottom: 80,
  },
  headr: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10
  },

  text: {
    fontSize: 20,
  },
  slider: {
    flex: 1,
    marginTop: 20,
    width: "100%"
  },
});

export default CategoryScreen;
