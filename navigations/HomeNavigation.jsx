import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../src/screens/HomeScreen";
import HomeHeader from "../src/components/HomeHeader";
import { Ionicons, Entypo, SimpleLineIcons } from "@expo/vector-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import NotificationsScreen from "../src/screens/NotificationsScreen";
import SettingScreen from "../src/screens/SettingScreen";
import SearchScreen from "../src/screens/SearchScreen";
const HomeNavigation = () => {
  const [openModal, setOpenModal] = useState(false);
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          //   header: () => <HomeHeader />,
          headerTitle: () => <HomeHeader />,
          headerRight: () => (
            <View style={tw`flex flex-row items-center`}>
              <Modal
                visible={openModal}
                animationType="slide"
                transparent={true}
              >
                <View
                  style={tw`bg-black bg-opacity-75 h-full flex items-center justify-center`}
                >
                  <View></View>
                  <TouchableOpacity
                    style={tw`flex flex-row items-center`}
                    onPress={() => navigation.navigate("Notification")}
                  >
                    <Ionicons name="notifications" size={20} color="white" />
                    <Text style={tw`mx-2 text-sm text-white`}>
                      Notification
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tw`flex flex-row items-center my-4`}
                    onPress={() => navigation.navigate("Setting")}
                  >
                    <Ionicons name="settings" size={24} color="white" />
                    <Text style={tw`mx-2 text-sm text-white`}>Setting</Text>
                  </TouchableOpacity>

                  <SimpleLineIcons
                    name="close"
                    size={24}
                    color="white"
                    onPress={() => setOpenModal(!openModal)}
                  />
                </View>
              </Modal>
              <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                <Ionicons name="search" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 5 }}
                onPress={() => setOpenModal(!openModal)}
              >
                <Entypo name="dots-three-vertical" size={15} color="black" />
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
      <Stack.Screen name="Notification" component={NotificationsScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
