import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { globalStyles } from '../global';
import CategoryList from './components/categoryname';
import FilterScreen from './components/filter';
import HorizontalFlatList from './components/HorizontalFlatList';
import StyledFlatList from './components/StyledFlatList';
import GenreList from './components/GenreList';


const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={[globalStyles.main]}>
      <View style={[globalStyles.container, styles.main]}>
        <View style={styles.mainheadrcnt}>
          <View style={styles.headr}>
            <Text style={globalStyles.cinema}>Cinema+</Text>
            <View style={styles.headrserach}>
              <TouchableOpacity>
                <Image source={require('../assets/search.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/profile.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <CategoryList />
          <FilterScreen />
          <View style={styles.slider}>
            <HorizontalFlatList />
            <GenreList />
          </View>
          <Text style={globalStyles.movieheading}>Created For You</Text>
          <StyledFlatList />
          <Text style={globalStyles.movieheading}>Bollywood</Text>
          <StyledFlatList />
          <Text style={globalStyles.movieheading}>Hollywood</Text>
          <StyledFlatList />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginBottom: 80,
  },
  mainheadrcnt: {
    flex: 1,
  },
  headr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headrserach: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  slider: {
    flex: 1,
    marginTop: 20,
    width: "100%"
  },
 
});

export default HomeScreen;
