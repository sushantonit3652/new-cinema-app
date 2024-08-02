import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const categories = [
    'All',
    'Movies',
    'TV Shows',
    'Web Series',
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
    'Category 6',
    'Category 7',
    'Category 8',
    'Category 9',
    'Category 10',
];


const CategoryItem = ({ title, isSelected, onPress }: { title: string; isSelected: boolean; onPress: () => void }) => (
    <TouchableOpacity
        style={[styles.categoryItem, { backgroundColor: isSelected ? '#DD3872' : '#000' }]}
        onPress={onPress}
    >
        <Text style={[styles.categoryText, { color: isSelected ? 'white' : 'white' }]}>{title}</Text>
    </TouchableOpacity>
);

const CategoryList = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handlePress = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <CategoryItem
                        title={item}
                        isSelected={item === selectedCategory}
                        onPress={() => handlePress(item)}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 16,
    },
    flatListContent: {
    },
    categoryItem: {
        padding: 8,
        marginHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: -0.1,
        paddingHorizontal: 16
        
    },
    categoryText: {
        fontWeight: '400',
        fontSize: 16
    },
});

export default CategoryList;
