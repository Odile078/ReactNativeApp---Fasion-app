import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";
// import { FlatList } from "react-native-web";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
const NavOptions = ({ categories }) => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      name: "Designs",
      image:
        "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
      screen: "Designs Screen",
    },
    {
      id: 2,
      name: "View on map",
      image:
        "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      screen: "Map Screen",
    },
  ];
  return (
    <FlatList
      data={categories || data}
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            if (item?.name === "Designs") {
              navigation.navigate("InsideHome", {
                screen: "Categories",
              });
            } else {
              navigation.navigate(item?.screen);
            }
          }}
          style={tw` px-6 py-2  bg-gray-200 m-2  rounded-3xl`}
        >
          {/* <ImageBackground
            style={{ width: 120, height: 100, resizeMode: "contain" }}
            source={{ uri: item?.image }}
          ></ImageBackground> */}
          <Text style={tw` text-sm font-semibold`}>{item?.name}</Text>
          {/* <Icon /> */}
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
