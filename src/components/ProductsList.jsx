import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import tw from "twrnc";

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../store/slices/productsSlice";
const ProductsList = ({ products }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      // horizontal
      keyExtractor={(item) => item.id}
      numColumns={Dimensions.get("window").width > 260 ? 2 : 1}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            dispatch(setSelectedProduct(item));
            navigation.navigate("Details");
          }}
          style={tw`p-2 pl-4 bg-gray-200 m-2 w-36`}
        >
          <ImageBackground
            style={{ width: 120, height: 100, resizeMode: "cover" }}
            source={{ uri: item?.image }}
          ></ImageBackground>
          <Text style={tw`mt-2 text-sm font-semibold`}>{item?.name}</Text>
          {/* <Icon /> */}
        </TouchableOpacity>
      )}
      style={{
        paddingBottom: 40,
        marginBottom: 20,
      }}
    />
  );
};

export default ProductsList;

const styles = StyleSheet.create({});
