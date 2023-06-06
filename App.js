import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from '@react-navigation/stack';
import Acceuil from './screens/Acceuil';
import Signup from './screens/Signup';
import zeeb from './screens/zeeb';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="alten"
          component={Progress}
          // options={{
          //   headerTitleAlign: 'center',
          //   headerBackTitle: 'djdj',
          //   //
          // }}
          //options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="acceuil"
          component={Acceuil}
          options={{ headerShown: false, headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false, headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="zebi"
          component={zeeb}
          options={{ headerShown: false, headerTitleAlign: 'center' }}
        />
        {/* <Stack.Screen
          name="Register"
          component={register}
          options={{
            headerTitleAlign: 'center',
            headerBackTitle: 'djdj',
          }}
          //options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={home}
          // options={{
          //   headerTitleAlign: 'center',
          //   headerBackTitle: 'djdj',
          //   //
          // }}
          //options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
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
