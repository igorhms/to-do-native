import React from 'react';
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, StatusBar, View } from 'react-native';
import Details from './src/pages/Details';
import Home from './src/pages/Home';
import Screen1 from './src/pages/Screen1';
import Screen2 from './src/pages/Screen2';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={
      {
        headerStyle: {
          backgroundColor: '#7a71fd',
          height: 80,
          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }
    }>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Screen1" component={Screen1} />
      <Drawer.Screen name="Screen2" component={Screen2} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator initialRouteName='DrawerRoutes' screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        statusBarAnimation: 'slide',
        headerStyle: {
          backgroundColor: '#7a71fd',
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        }
      }}>
        <Stack.Screen name="DrawerRoutes" component={DrawerRoutes}></Stack.Screen>
        <Stack.Screen name="Details" component={Details} options={{ headerShown: true }} />
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