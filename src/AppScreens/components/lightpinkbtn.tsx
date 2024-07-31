// src/components/LightPinkbtn.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Lightbtn = ({ text, onPress }: { text: string, onPress?: () => void }) => {
    const { width } = Dimensions.get('window');
    const isTablet = width >= 768;

    return (
        <TouchableOpacity style={isTablet ? sstyles.tabletBtn : sstyles.btn} onPress={onPress}>
            <Text style={sstyles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const sstyles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 44,
        paddingVertical: 16,
        backgroundColor: '#FDC5D9',
        marginVertical: 8, 
        width: "100%"
    },
    tabletBtn: {
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 44,
        paddingVertical: 16,
        backgroundColor: '#FDC5D9',
        marginVertical: 8,  
        width: "100%"
    },
    text: {
        color: '#DD3872',
        fontSize: 16,
        fontWeight: '500',

    },
});

export default Lightbtn;
