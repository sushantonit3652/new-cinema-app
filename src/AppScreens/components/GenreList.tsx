import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';

interface GenreItemProps {
    title: string;
    isSelected: boolean;
    onPress: () => void;
}

const genres: string[] = [
    'Action',
    'Comedy',
    'Drama',
    'Horror',
    'Romance',
    'Sci-Fi',
    'Thriller',
    'Documentary',
    'Animation',
    'Adventure',
    'Romance',
    'Sci-Fi',
    'Thriller',
    'Documentary',
    'Animation',
    'Adventure',
    

];

const GenreItem: React.FC<GenreItemProps> = ({ title, isSelected, onPress }) => (
    <TouchableOpacity
        style={[styles.genreItem, isSelected ? styles.selectedGenreItem : styles.unselectedGenreItem]}
        onPress={onPress}
    >
        <Text style={styles.genreText}>{title}</Text>
    </TouchableOpacity>
);

const GenreList: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

    const handlePress = (genre: string) => {
        setSelectedGenre(genre);
    };

    const renderItem: ListRenderItem<string> = ({ item }) => (
        <GenreItem
            title={item}
            isSelected={item === selectedGenre}
            onPress={() => handlePress(item)}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={genres}
                renderItem={renderItem}
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
        marginVertical: 16
    },
    flatListContent: {
    },
    genreItem: {
        padding: 8,
        marginHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: -0.1,
        paddingHorizontal: 16
    },
    selectedGenreItem: {
        backgroundColor: '#DD3872',
    },
    unselectedGenreItem: {
        backgroundColor: 'transparent',
        borderColor: '#6C6C6C',
        borderWidth: 1,
    },
    genreText: {
        color: 'white',
        fontWeight: '400',
        fontSize:16,

    },
});

export default GenreList;
