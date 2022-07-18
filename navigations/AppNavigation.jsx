import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../src/screens/HomeScreen";
import ProductScreen from "../src/screens/ProductScreen";
import MapScreen from "../src/screens/MapScreen";
import SplashScreen from "../src/screens/SplashScreen";
import ProductDetails from "../src/screens/ProductDetails";
import BottomNavigation from "./BottomNavigation";
import SideNavigation from "./SideNavigation";
const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash screen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Home screen"
        component={HomeScreen}
        options={{
          headerShown: true,
        }}
      /> */}
      <Stack.Screen
        name="InsideHome"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Designs Screen"
        component={ProductScreen}
        options={{
          headerShown: true,
        }}
      /> */}
      <Stack.Screen
        name="Map Screen"
        component={MapScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: "Map",
        })}
      />
      <Stack.Screen
        name="Details"
        component={ProductDetails}
        options={{
          title: "Product Details",
        }}
      />
      <Stack.Screen
        name="Drawer"
        component={SideNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
