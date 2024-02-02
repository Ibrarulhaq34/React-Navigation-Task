import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from "./HomeScreen";
import SecondScreen from "./secondScreen";
import LastScreen from "./lastScreen";


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Second' component={SecondScreen} options={
            ({route}) => ({title: 'Second Screen: ' + route.params.number,
            headerLeft: () => <></>})
          } 
          />
        <Stack.Screen name='Last' component={LastScreen} options={{
          headerTitle: () => <Icon name="android" style={{marginLeft: 30}} size={40} color="blue"></Icon>,
          headerBackVisible: false,
          headerRight: () => <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Last Screen</Text>
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
