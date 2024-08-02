import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ImageBackground, ListRenderItem } from 'react-native';

interface GenreItemProps {
    title: string;
    image: any; // Specify the type for image, usually require()
    isSelected: boolean;
    onPress: () => void;
}

const genres = [
    { title: 'Action', image: require('../../assets/poster.png') },
    { title: 'Comedy', image: require('../../assets/poster.png') },
    { title: 'Drama', image: require('../../assets/poster.png') },
    { title: 'Horror', image: require('../../assets/poster.png') },
    { title: 'Romance', image: require('../../assets/poster.png') },
    { title: 'Sci-Fi', image: require('../../assets/poster.png') },
    { title: 'Thriller', image: require('../../assets/poster.png') },
    { title: 'Documentary', image: require('../../assets/poster.png') },
    { title: 'Animation', image: require('../../assets/poster.png') },
    { title: 'Adventure', image: require('../../assets/poster.png') },
];

const GenreItem: React.FC<GenreItemProps> = ({ title, image, isSelected, onPress }) => (
    <TouchableOpacity style={[styles.genreItem, isSelected ? styles.selectedGenreItem : styles.unselectedGenreItem]} onPress={onPress}>
        <ImageBackground source={image} style={styles.imageBackground} imageStyle={styles.imageStyle} resizeMode='cover'>
            <Text style={styles.genreText}>{title}</Text>
        </ImageBackground>
    </TouchableOpacity>
);

const StyledFlatList: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

    const handlePress = (genre: string) => {
        setSelectedGenre(genre);
    };

    const renderItem: ListRenderItem<typeof genres[0]> = ({ item }) => (
        <GenreItem
            title={item.title}
            image={item.image}
            isSelected={item.title === selectedGenre}
            onPress={() => handlePress(item.title)}
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatListContent: {

    },
    genreItem: {
        width: 105,
        height: 180,
        flexShrink: 0,
        borderRadius: 8,
        marginHorizontal: 5,
        marginLeft: -0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    imageStyle: {
        borderRadius: 8,
    },
    selectedGenreItem: {
        borderWidth: 2,
        borderColor: '#DD3872',
    },
    unselectedGenreItem: {
        borderWidth: 1,
        borderColor: '#6C6C6C',
    },
    genreText: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 5,
        borderRadius: 5,
    },
});

export default StyledFlatList;
