
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screens/HomePage';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';




const Stact = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stact.Navigator>
      <Stact.Screen name="Home" component={HomePage}/>
      <Stact.Screen name="Login" component={LoginScreen}/>
      <Stact.Screen name="Register" component={RegisterScreen}/>
     </Stact.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
