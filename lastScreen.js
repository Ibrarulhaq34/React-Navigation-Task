import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default LastScreen = ({ navigation }) => {
    navigation.setOptions({
        headerLeft: () => (<TouchableOpacity onPress={()=> navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="blue"></Icon>
    </TouchableOpacity>)
    });
    return (
        <View style={mystyles.main}>
            <TouchableOpacity style={mystyles.button} onPress={() => navigation.popToTop()}>
                <Text style={mystyles.buttonTxt}>Go to Main Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={mystyles.button} onPress={() => navigation.navigate({
                name: 'Second',
                params: {name: 'Ali'},
                merge: true
            })}>
                <Text style={mystyles.buttonTxt}>Go to Previous Screen</Text>
            </TouchableOpacity>
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
    }
});
