import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import RegisterScreen from './screens/RegisterScreen';
import SecondRegisterScreen from './screens/SecondRegisterScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
         <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />

    <Stack.Screen
          name="Reset"
          component={ResetPasswordScreen}
          options={{
            headerShown: false
          }}
        />
      <Stack.Screen
          name="Signup"
          component={RegisterScreen}
          options={{
            headerShown: false
          }}
        />  

<Stack.Screen
          name="Signup2"
          component={SecondRegisterScreen}
          options={{
            headerShown: false
          }}
        />  
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


