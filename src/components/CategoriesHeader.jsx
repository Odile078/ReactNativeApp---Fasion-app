import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import tw from "twrnc";
import ShoppingImage from "../../assets/shopping-img4.png";
const CategoriesHeader = (props) => {
  const data = [
    {
      id: 1,
      name: "Women-Shoes",
      screen: "Designs Screen",
      category: "women-shoes",
    },
    {
      id: 2,
      name: "Men-Shoes",
      screen: "Designs Screen",
      category: "men-shoes",
    },
    {
      id: 3,
      name: "Dresses",
      screen: "Map Screen",
      category: "dresses",
    },
    {
      id: 4,
      name: "Shirts",
      screen: "Map Screen",
      category: "women-shirt",
    },
  ];
  const {
    navigationState,
    navigation,
    activeTintColor,
    inactiveTintColor,
    state,
  } = props;
  const activeTabIndex = state?.index;
  return (
    <View style={tw``}>
      <View>
        <View style={tw` h-60 relative rounded-xl overflow-hidden`}>
          <ImageBackground
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              zIndex: 2,
              borderRadius: 15,
            }}
            source={ShoppingImage}
          >
            <Text
              style={tw`text-white text-2xl font-bold mx-2 mt-6 text-center`}
            >
              All you need , all yours for the taking !
            </Text>
          </ImageBackground>
          <LinearGradient
            // colors={["#131413", "#f1c40f", "#8e44ad"]}
            colors={["#080808", "#131413", "#f1c40f", "#8e44ad"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={tw`w-full h-60 absolute top-0 z-0 rounded-xl overflow-hidden`}
          />
        </View>
      </View>

      <View style={tw`py-4 mx-4 overflow-hidden`}>
        <FlatList
          data={navigationState?.routes}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => {
            const isRouteActive = index === activeTabIndex;
            const tintColor = isRouteActive ? "#fcba03" : "#333230";
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(item?.name, { activeTab: activeTabIndex })
                }
                style={
                  isRouteActive
                    ? tw`px-6 py-2 bg-red-300 m-2 rounded-3xl`
                    : tw` px-6 py-2 bg-gray-200 m-2 rounded-3xl`
                }
              >
                <Text
                  style={
                    isRouteActive
                      ? tw` text-sm font-semibold text-white`
                      : tw` text-sm font-semibold text-gray-800`
                  }
                >
                  {item?.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CategoriesHeader;

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "cyan",
    height: 150,
    marginHorizontal: 10,
  },
  textContainer: {
    marginVertical: 30,
    paddingTop: 30,
  },
  textWhite: {
    color: "black",
  },
  tabContainer: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    height: 40,
  },
});
