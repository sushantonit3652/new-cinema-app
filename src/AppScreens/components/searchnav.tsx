import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../../global';

const Searchnav = () => {
    return (
        <View style={styles.container}>
            <Text style={globalStyles.cinema}>Cinema+</Text>
            <TouchableOpacity>
                <Image source={require('../../assets/search.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
     
    },

});

export default Searchnav;
