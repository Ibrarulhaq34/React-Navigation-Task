import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default SecondScreen = ({ navigation, route }) => {
    return (
        <View style={mystyles.main}>
            <TouchableOpacity style={mystyles.button} onPress={() => navigation.push('Last')}>
                <Text style={mystyles.buttonTxt}>Push Next Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={mystyles.button} onPress={() => navigation.navigate('Last')}>
                <Text style={mystyles.buttonTxt}>Navigate to Next Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={mystyles.button} onPress={() => navigation.navigate('Second', {
                number: route.params.number
            })}>
                <Text style={mystyles.buttonTxt}>Go to Same Screen</Text>
            </TouchableOpacity>
            <Text style={mystyles.nameTxt}>Your Name: {route.params?.name}</Text>
        </View>
    );
}

const mystyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    nameTxt: {
        color: 'black',
        fontSize: 18
    }
});
