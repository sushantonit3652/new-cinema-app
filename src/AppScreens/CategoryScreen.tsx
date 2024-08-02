import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import HorizontalFlatList from './components/HorizontalFlatList';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const isTablet = screenWidth >= 768;


const CategoryScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Notifications Screen</Text>
    <View style={styles.slider}>
            <HorizontalFlatList />
           
          </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d1c4e9',
  },
  text: {
    fontSize: 20,
  },
  slider: {
    flex: 1,
    marginTop: 20,
    width:"100%"
  },
});

export default CategoryScreen;
