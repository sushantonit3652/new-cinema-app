import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './src/AppScreens/Signup';
import Asktowatch from './src/AppScreens/Asktowatch';
import LoginScreen from './src/AppScreens/LoginScreen';
import Getstartedscreen from './src/AppScreens/Getstartedscreen';
import BottomTabNavigator from './src/AppScreens/BottomTabNavigator';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Asktowatch">
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Asktowatch" component={Asktowatch} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Getstartedscreen" component={Getstartedscreen} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
