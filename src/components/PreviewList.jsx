import {
  FlatList,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../store/slices/productsSlice";
const PreviewList = ({ products }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={tw`flex flex-row items-center`}>
      <FlatList
        data={products}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          index === products?.length - 1 ? (
            <View style={tw`flex items-center flex-row`}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(setSelectedProduct(item));
                  navigation.navigate("Details");
                }}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
              >
                <ImageBackground
                  style={{ width: 120, height: 100, resizeMode: "contain" }}
                  source={{ uri: item?.image }}
                ></ImageBackground>
                <Text style={tw`mt-2 text-sm font-semibold`}>{item?.name}</Text>
                {/* <Icon /> */}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("InsideHome", {
                    screen: "Categories",
                  });
                }}
                style={tw`px-4 py-2 bg-gray-200 m-2 rounded-xl`}
              >
                <Text style={tw` text-sm font-semibold`}>View more</Text>
                {/* <Icon /> */}
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                dispatch(setSelectedProduct(item));
                navigation.navigate("Details");
              }}
              style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            >
              <ImageBackground
                style={{ width: 120, height: 100, resizeMode: "contain" }}
                source={{ uri: item?.image }}
              ></ImageBackground>
              <Text style={tw`mt-2 text-sm font-semibold`}>{item?.name}</Text>
              {/* <Icon /> */}
            </TouchableOpacity>
          )
        }
        style={tw`flex-1`}
      />
    </View>
  );
};

export default PreviewList;

const styles = StyleSheet.create({});
