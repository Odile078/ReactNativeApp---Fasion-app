import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NotificationsScreen from "../src/screens/NotificationsScreen";
import SettingScreen from "../src/screens/SettingScreen";
import HomeScreen from "../src/screens/HomeScreen";

const SideNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerStyle: { right: 0 },
      }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="notifications" component={NotificationsScreen} />
      <Drawer.Screen name="setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default SideNavigation;

const styles = StyleSheet.create({});
