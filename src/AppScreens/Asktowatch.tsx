import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Pinkbtn from './components/pinkbtn';
import Lightbtn from './components/lightpinkbtn';
import { globalStyles } from '../global';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  LoginScreen: undefined;
  // Add other routes here if needed
};

type AsktowatchNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const Asktowatch: React.FC = () => {
  const navigation = useNavigation<AsktowatchNavigationProp>();

  return (
    <View style={globalStyles.main}>
      <ImageBackground source={require('../assets/watchbg.png')} style={styles.background} resizeMode='cover'>
        <View style={[globalStyles.container, styles.container]}>
          <View style={styles.iconcnt}>
            <Image source={require('../assets/cinemaicon.png')} />
            <View style={styles.icontextcnt}>
              <Text style={styles.watchheading}>Watch</Text>
              <Text style={styles.moviesheading}>Movies</Text>
            </View>
            <View style={styles.textcnt}>
              <Text style={styles.text}>
                Watch unlimited movies, series & TV shows anywhere, anytime
              </Text>
            </View>
          </View>
          <View style={styles.btncnt}>
            <Pinkbtn text="Login" onPress={() => navigation.navigate('LoginScreen')} />
            <Lightbtn text="Try as Guest!" onPress={() => navigation.navigate('BottomTabNavigator')} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '20%',
  },
  iconcnt: {
    alignItems: 'center',
    marginTop: '25%',
  },
  icontextcnt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  watchheading: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  moviesheading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#DD3872',
    marginLeft: 5,
  },
  textcnt: {
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
  },
  btncnt: {
    width: "100%",
    maxWidth: 500,
    paddingHorizontal: 20,
    alignItems: 'center',
  }
});

export default Asktowatch;
