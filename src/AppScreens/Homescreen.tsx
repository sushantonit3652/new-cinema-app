import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../global';
import CategoryList from './components/categoryname';
import FilterScreen from './components/filter';
import HorizontalFlatList from './components/HorizontalFlatList';
import StyledFlatList from './components/StyledFlatList';
import GenreList from './components/GenreList';

const HomeScreen: React.FC = () => {
  return (<ScrollView style={styles.scrollView}>
    <View style={[globalStyles.main, styles.main]}>
      <View style={styles.mainheadrcnt}>
        <View style={styles.headr}>
          <Text style={styles.cinema}>Cinema+</Text>
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
          <GenreList/>
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
    flex: 1,
paddingHorizontal:16,
    marginBottom:"19%"
  },
  mainheadrcnt: {
    flex: 1,
  },
  headr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cinema: {
    color: '#DD3872',
    fontSize: 28,
    fontWeight: '700',
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
  },
  scrollView: {
    flex: 1,

  },
});

export default HomeScreen;
