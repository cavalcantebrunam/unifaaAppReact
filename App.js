import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import { RNSScreen } from 'react-native-screens';


import CadastroUsuarioScreen from './CadastroUsuarioScreen.js';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
