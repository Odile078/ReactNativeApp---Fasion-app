import { StyleSheet } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CategoryDesigns from "../src/components/designs/CategoryDesigns";
import CategoriesHeader from "../src/components/CategoriesHeader";
const ProductCategoryNavigation = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      tabBar={CategoriesHeader}
      initialRouteName="Women shoes"
      screenOptions={{
        tabBarActiveTintColor: "#fcba03",
        tabBarInactiveTintColor: "#333230",
      }}
    >
      <Tab.Screen
        name="Women shoes"
        component={CategoryDesigns}
        options={{
          title: "Shoes",
          tabBarLabel: "Shoes coming up",
          tabBarActiveTintColor: "red",
          tabBarStyle: {
            backgroundColor: "blue",
          },
        }}
      />
      <Tab.Screen name="Men shoes" component={CategoryDesigns} />
      <Tab.Screen name="Dresses" component={CategoryDesigns} />
      <Tab.Screen name="Shirt" component={CategoryDesigns} />
    </Tab.Navigator>
  );
};

export default ProductCategoryNavigation;

const styles = StyleSheet.create({});
