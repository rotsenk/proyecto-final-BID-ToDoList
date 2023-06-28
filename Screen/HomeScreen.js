import React, { useRef, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {  StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Modal } from 'react-native';
import { addTarea, editarTarea, eliminarTarea, mostrarDialogo } from '../reduxtk/slice';
import store from '../reduxtk/store';
import { Button, ListItem } from '@rneui/base';
import { TituloScreen } from './TituloScreen';
import { Image } from 'react-native';


// create a component
const HomeScreen = (props) => {
    const {token, localId} = props.p;
    const lstTarea = useSelector((estado) => estado.lstTarea);
    const dispatch = useDispatch();
    const estadoDlg = useSelector((estado)=> estado.estDlg);
    const [nuevaTarea, setNuevaTarea] = useState([]);

    const handleAddTarea = () => {
        const nueva = {id: nuevaTarea[0], nom: nuevaTarea[1], desc: nuevaTarea[2]}
        dispatch(addTarea(nueva));
        setNuevaTarea([]);
    };

    const oyenteNuevaTarea = (pos, valor) => {
        const ob = nuevaTarea;
        ob[pos] = valor;
        setNuevaTarea(ob);
    }

    const handleEliminarTarea = index => {
        dispatch(eliminarTarea(index));
    };

    const handleEditarTarea = (index, text) => {
        dispatch(mostrarDialogo(true));
    };
 
    return (
        <><TituloScreen /><View  style={styles.container}>
            <View style={styles.elementos}>
                <TextInput
                    style={styles.inputId}
                    placeholder='id'
                    value={nuevaTarea[0]}
                    onChangeText={(valor) => oyenteNuevaTarea(0, valor)} />
                <TextInput
                    style={styles.input}
                    placeholder='Digite el título'
                    value={nuevaTarea[1]}
                    onChangeText={(valor) => oyenteNuevaTarea(1, valor)} />
                <TextInput
                    style={styles.input}
                    placeholder='Descripción'
                    value={nuevaTarea[2]}
                    onChangeText={(valor) => oyenteNuevaTarea(2, valor)} />
                <Button title="Agregar" onPress={handleAddTarea} />
            </View>

            <ScrollView style={styles.scroll}>
                {(lstTarea && lstTarea.length > 0) ? (
                    lstTarea.map((it, idx) => (
                        <ListItem.Swipeable key={idx}
                            rightContent={(reset) => (
                                <Button
                                    title="Eliminar"
                                    icon={{ name: 'delete', color: 'white' }}
                                    buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                                    onPress={() => { dispatch(eliminarTarea(it.idTarea)), reset(); } } />)}>
                            <ListItem.Content style={{backgroundColor: idx % 2 === 0 ? '#55ff6c3b' : '#ff95e43d',}}>
                                <ListItem.Title>
                                    {it.nombre} 
                                </ListItem.Title>
                                <ListItem.Subtitle>
                                    {it.descripcion}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem.Swipeable>
                    ))
                ) : <View style={styles.sinTarea}> 
                            <Image source={require('../assets/done-icon.png')} style={styles.icono}/>
                            <Text>¡Genial, no hay tareas pendientes!</Text>
                    </View>}
            </ScrollView>
        </View></>
    );
};

// define your styles
const styles = StyleSheet.create({
    container:{
        width:'95%',
        backgroundColor: '#ffffff',
        margin: '3%',
        marginTop:'1%',
        marginBottom:'50%',
    },

    scroll:{
        marginTop: '2%',
        width: '95%',
        marginLeft: '2%',
        
    },

    elementos:{
        marginTop: '2%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.70,
        elevation: 5,
    },

    input:{
        backgroundColor: '#dff5ff32',
        width: '32%',
        borderRadius: 4,
        padding: 5,

        fontSize: 16,
        color: '#000',
    },

    inputId:{
        backgroundColor: '#dff5ff32',
        width: '8%',
        borderRadius: 4,
        padding: 5,

        fontSize: 16,
        color: '#000',
    },

    inputContainer:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },

    sinTarea:{
        alignItems:'center',
        marginTop: '25%'
    },

    icono:{
        width: 80, 
        height: 80,
        marginBottom: '5%',
    }
});

//make this component available to the app
export {HomeScreen};