import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoriteScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Notifications Screen</Text>
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
});

export default FavoriteScreen;
