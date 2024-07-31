import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Pinkbtn from './components/pinkbtn';

const languages = [
    'English', 'Spanish', 'French', 'German',
    'Chinese', 'Japanese', 'Korean', 'Italian',
    'Russian', 'Japanese', 'Korean', 'Italian',
];

const WIDTH = 150;
const HEIGHT = (WIDTH * 9) / 16;

const genres = [
    { name: 'Action', image: require('../assets/genere.png') },
    { name: 'Comedy', image: require('../assets/genere.png') },
    { name: 'Drama', image: require('../assets/genere.png') },
    { name: 'Horror', image: require('../assets/genere.png') },
    { name: 'Romance', image: require('../assets/genere.png') },
    { name: 'Sci-Fi', image: require('../assets/genere.png') },
    { name: 'Fantasy', image: require('../assets/genere.png') },
    { name: 'Thriller', image: require('../assets/genere.png') },
    { name: 'Documentary', image: require('../assets/genere.png') },
    { name: 'Adventure', image: require('../assets/genere.png') },
    { name: 'Animation', image: require('../assets/genere.png') },
    { name: 'Mystery', image: require('../assets/genere.png') },
    { name: 'Crime', image: require('../assets/genere.png') },
    { name: 'Family', image: require('../assets/genere.png') },
];

type RootStackParamList = {
    home: undefined;
    // Add other routes here if needed
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'home'>;

const SelectYourLanguages: React.FC = () => {
    return (
        <View style={styles['languages']}>
            <Text style={styles['languages__title']}>Select Your Languages</Text>
            <View style={styles['languages__container']}>
                {languages.map((language, index) => (
                    <TouchableOpacity key={index} style={styles['languages__box']}>
                        <Text style={styles['languages__text']}>{language}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const SelectYourGenres: React.FC = () => {
    return (
        <View style={styles['genres']}>
            <Text style={styles['genres__title']}>Select Your Genres</Text>
            <View style={styles['genres__box']}>
                {genres.map((genre, index) => (
                    <TouchableOpacity style={styles['genres__box-content']}>
                    <View key={index} style={styles['genres__box-content']}>
                        <Image source={genre.image} style={styles['genres__img']} />
                        <Text style={styles['genres__text']}>{genre.name}</Text>
                    </View>
                    </TouchableOpacity>
                ))}
            </View>
            {/* <FlatList
                style={styles['genres__box']}
                data={genres}
                renderItem={({ item }) => (
                    <ImageBackground
                        source={item.image}
                        style={styles['genres__img']}
                        resizeMode="cover"
                    >
                        <TouchableOpacity style={styles['genres__box-content']}>
                            <Text style={styles['genres__text']}>{item.name}</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                )}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
            /> */}
        </View>
    );
};


const PreferredProvider: React.FC = () => {
    return (
        <View style={styles['preferred-provider']}>
            <Text style={styles['preferred-provider__title']}>Preferred Provider</Text>
            <FlatList
                style={styles['provider__box']}
                data={genres}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <ImageBackground
                            source={item.image}
                            style={styles['provider__img']}
                            resizeMode="cover"
                        >
                        </ImageBackground>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>
    );
};

const GetstartedScreen: React.FC = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <View style={styles['header']}>
                <Text style={styles['header__title']}>Cinema+</Text>
                <Text style={styles['header__skip']} onPress={() => navigation.navigate('Home')}>SKIP</Text>
            </View>
            <SelectYourLanguages />
            <SelectYourGenres />
            <PreferredProvider />
            <Pinkbtn text="GET STARTED" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        padding: 20,
        backgroundColor: '#140005',
        gap: 12,
    },
    'header': {
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    'header__title': {
        color: '#DD3872',
        fontSize: 28,
        fontWeight: '700',
    },
    'header__skip': {
        color: '#DD3872',
        fontSize: 18,
        fontWeight: '500',
    },
    'languages': {
        alignItems: 'center',
        width: '100%',
        gap: 10,
    },
    'languages__title': {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'flex-start'
    },
    'languages__container': {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        width: '100%',
    },
    'languages__box': {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#6C6C6C',
        backgroundColor: '#1E0400',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    'languages__text': {
        color: 'white',
        fontSize: 14,
    },
    'genres': {
        width: '100%',
        gap: 10,
    },
    'genres__title': {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    'genres__box': {
        width: '100%',
        gap: 10,
        flexDirection: 'row',  
        flexWrap: 'wrap',
    },
    'genres__img': {
        width: WIDTH,
        height: HEIGHT,
        marginRight: 16,
    },
    'genres__box-content': {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    'genres__text': {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },

    'preferred-provider': {
        width: '100%',
        gap: 10,
    },
    'preferred-provider__title': {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },

    'provider__box': {
        gap: 10,
        width: '100%',
    },
    'provider__img': {
        width: 70,
        height: 70,
        marginRight: 16,
        borderRadius: 10,
        overflow: 'hidden',
    },
    

});

export default GetstartedScreen;
