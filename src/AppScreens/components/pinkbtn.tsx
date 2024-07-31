// src/components/LightPinkbtn.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Pinkbtn = ({ text, onPress }: { text: string, onPress?: () => void }) => {
    const { width } = Dimensions.get('window');
    const isTablet = width >= 768;

    return (
        <TouchableOpacity  style={isTablet ? styles.pinktabletBtn : styles.pinkbtn}    onPress={onPress}>
            <Text style={styles.pinktext}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    pinkbtn: {
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 60,
        paddingVertical: 16,
        backgroundColor: '#DD3872',
        marginVertical: 8, 
        width: "100%" 
    },
    pinktabletBtn: {
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 44,
        paddingVertical: 16,
        backgroundColor: '#DD3872',
        marginVertical: 8,  
        width: "100%"
    },
    pinktext: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default Pinkbtn;
