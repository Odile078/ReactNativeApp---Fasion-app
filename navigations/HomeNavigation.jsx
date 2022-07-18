import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../src/screens/HomeScreen";
import HomeHeader from "../src/components/HomeHeader";
import { Ionicons } from "@expo/vector-icons";
const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          //   header: () => <HomeHeader />,
          headerTitle: () => <HomeHeader />,
          headerRight: () => (
            <View>
              <TouchableOpacity style={{ marginLeft: 15 }}>
                <Ionicons name="settings" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            height: 50,
            // position: "absolute",
            // top: 0,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#ffffff",
            shadowColor: "black",
            elevation: 25,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
