import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default HomeScreen = ({ navigation }) => {
    const [number, setNumber] = useState('')
    return (
        <View style={mystyles.main}>
            <Text style={mystyles.mainTxt}>Main Screen</Text>
            <TextInput style={mystyles.input} value={number} onChangeText={setNumber}
             placeholder='Enter a number' inputMode='numeric'/>
            <TouchableOpacity style={mystyles.button} onPress={() => navigation.navigate('Second', {
                number: number
            })}>
                <Text style={mystyles.buttonTxt}>Go to Next Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

const mystyles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainTxt: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black',
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        width: '40%',
        marginBottom: 20,
        color: 'black'
    },
    button: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 5,
        marginBottom: 20
    },
    buttonTxt: {
        fontSize: 16,
        color: 'white'
    }
});
