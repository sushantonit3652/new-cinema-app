import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';

import { globalStyles } from '../global';
import StyledFlatList from './components/StyledFlatList';
import Searchnav from './components/searchnav';
import CategoryList from './components/categoryname';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const isTablet = screenWidth >= 768;
const FavoriteScreen = () => (
  <ScrollView style={[globalStyles.main]}>
    <View style={[globalStyles.container, styles.main]}>
      <View style={styles.headr}>
        <Text style={globalStyles.cinema}>My Favorites</Text>

      </View>
      <CategoryList />
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

export default FavoriteScreen;
