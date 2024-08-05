import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Homescreen';
import CategoryScreen from './CategoryScreen';
import SettingScreen from './SettingScreen';
import FavoriteScreen from './FavoriteScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress, focused }) => (
  <TouchableOpacity
    style={[
      styles.customButton,
      focused && styles.customButtonFocused,
      {
        backgroundColor: focused ? '#DD3872' : 'transparent',
      },
    ]}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.shadowContainer}>
      <View style={[styles.tabBar]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const iconName =
            route.name === 'Home'
              ? require('../assets/home.png')
              : route.name === 'Category'
                ? require('../assets/category.png')
                : route.name === 'Favorite'
                  ? require('../assets/favorite.png')
                  : route.name === 'Settings'
                    ? require('../assets/setting.png')
                    : '';

          return (
            <View key={index} style={styles.tabItem}>
              <CustomTabBarButton onPress={onPress} focused={isFocused}>
                <Image
                  source={iconName}
                  style={[
                    { width: 24, height: 24, tintColor: isFocused ? 'white' : 'gray' },
                    isFocused && { width: 20, height: 20 },
                  ]}
                />
              </CustomTabBarButton>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const BottomTabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Category" component={CategoryScreen}  options={{ headerShown: false }}  />
    <Tab.Screen name="Favorite" component={FavoriteScreen} options={{ headerShown: false }}  />
    <Tab.Screen name="Settings" component={SettingScreen} options={{ headerShown: false }}  />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  shadowContainer: {
    // Ensure the container has a background color
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 70,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderColor: '#DD3872', // Add border color here

  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  customButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
    borderWidth: 0,

  },
  customButtonFocused: {
    width: 70,
    height: 70,
    borderWidth: 12,
    borderColor: 'black',
    backgroundColor: '#DD3872',
    top: -10
  },
});

export default BottomTabNavigator;
