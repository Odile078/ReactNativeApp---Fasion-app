import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../src/screens/HomeScreen";
import ProductScreen from "../src/screens/ProductScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProductCategoryNavigation from "./ProductCategoryNavigation";
import HomeNavigation from "./HomeNavigation";
const BottomNavigation = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        // tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "dashboard" : "dashboard";
          } else if (route.name === "Designs Screen") {
            iconName = focused ? "shopping-cart" : "shopping-basket";
          } else if (route.name === "Categories") {
            iconName = focused ? "category" : "category";
          }
          return <MaterialIcons name={iconName} size={24} color={color} />;
        },
        tabBarStyle: {
          // position: "absolute",
          // bottom: 25,
          // left: 20,
          // right: 20,
          // elevation: 0,
          backgroundColor: "#ffffff",
          // borderRadius: 50,
          // borderColor: "#36824B",
          // height: 50,
        },
      })}
      barStyle={{
        backgroundColor: "#ffffff",
        position: "absolute",
        bottom: 0,
      }}
      labeled={true}
      activeColor="#c0392b"
      inactiveColor="gray"
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={({ route }) => ({
          tabBarLabel: "Home",
          tabBarShowLabel: false,
        })}
      />
      {/* <Tab.Screen
        name="Designs Screen"
        component={ProductScreen}
        options={({ route }) => ({
          tabBarLabel: "Designs",
          tabBarShowLabel: false,
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      /> */}
      <Tab.Screen
        name="Categories"
        component={ProductCategoryNavigation}
        options={({ route }) => ({
          tabBarLabel: "Designs",
          tabBarShowLabel: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
