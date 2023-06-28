import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const TituloScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.bigBlue}>Lista de Tareas</Text>
            <Image
                source={require('../assets/icon-checklist.png')}
                style={styles.icono}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',        
        marginTop: '15%',
    },

    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 35
    },

    icono:{
        width: 80, 
        height: 80,
        marginHorizontal: '3%'
    }
});

//make this component available to the app
export { TituloScreen };
