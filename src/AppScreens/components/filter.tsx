import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const SelectionView = ({ title, isSelected, onPress }) => (
    <TouchableOpacity
        style={[styles.selectionView, { backgroundColor: isSelected ? '#DD3872' : 'black' }]}
        onPress={onPress}
    >
        <Text style={[styles.selectionText, { color: isSelected ? 'white' : 'white' }]}>{title}</Text>
    </TouchableOpacity>
);

const FilterScreen = () => {
    const [selectedView, setSelectedView] = useState(''); // Default to an empty string

    const handlePress = (view) => {
        setSelectedView(view);
    };

    return (
        <View style={styles.backgroundView}>
            <View style={styles.row}>
                <SelectionView
                    title="Popular"
                    isSelected={selectedView === 'Popular'}
                    onPress={() => handlePress('Popular')}
                />
                <SelectionView
                    title="Trending"
                    isSelected={selectedView === 'Trending'}
                    onPress={() => handlePress('Trending')}
                />
                <SelectionView
                    title="Soon"
                    isSelected={selectedView === 'Soon'}
                    onPress={() => handlePress('Soon')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: '#6C6C6C',
        marginTop: 16,
           
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    selectionView: {
        display: 'flex',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 8,
       
    },
    selectionText: {
        fontSize: 16,
        fontWeight: '400'
    },
});

export default FilterScreen;
