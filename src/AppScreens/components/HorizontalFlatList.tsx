import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, Animated } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const isTablet = screenWidth >= 768;

const images = [
    {
        image: require('../../assets/jhon.png'), // Replace with your image paths
        title: 'John Wick 4',
        genre: 'Crime, Thriller',
    },
    {
        image: require('../../assets/jhon.png'), // Replace with your image paths
        title: 'Another Movie',
        genre: 'Action, Drama',
    },
    {
        image: require('../../assets/jhon.png'), // Replace with your image paths
        title: 'More Movies',
        genre: 'Adventure, Sci-Fi',
    },
    {
        image: require('../../assets/jhon.png'), // Replace with your image paths
        title: 'More Movies',
        genre: 'Adventure, Sci-Fi',
    },
    {
        image: require('../../assets/jhon.png'), // Replace with your image paths
        title: 'More Movies',
        genre: 'Adventure, Sci-Fi',
    },
];

const HorizontalFlatList = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const renderItem = ({ item }) => (
        <View style={styles.carouselItem}>
            <Image source={item.image} style={styles.carouselImage} resizeMode="contain" />
            <View style={styles.overlay}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.genre}>{item.genre}</Text>
            </View>
        </View>
    );

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / screenWidth);
        setActiveIndex(index);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false, listener: handleScroll }
                )}
                scrollEventThrottle={16}
            />
            <View style={styles.dotContainer}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { backgroundColor: index === activeIndex ? '#DD3872' : 'white' },
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
     
    
    },
    carouselItem: {
       
        borderRadius: 8,
        overflow: 'hidden',
        width: screenWidth,
        height: isTablet ? screenHeight * 0.6 : screenHeight * 0.4,

    },
    carouselImage: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: isTablet ? 24 : 18,
        fontWeight: 'bold',
    },
    genre: {
        color: 'white',
        fontSize: isTablet ? 18 : 14,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
    },
});

export default HorizontalFlatList;
