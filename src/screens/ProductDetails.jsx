import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const ProductDetails = () => {
  const { products, selectedProduct } = useSelector(({ Product }) => Product);
  const edges = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: Dimensions.get("window").height + (edges.bottom - 70),
        width: Dimensions.get("window").width * 0.95,
        position: "relative",
      }}
    >
      <ScrollView style={tw`m-4 `} showsVerticalScrollIndicator={false}>
        <View
          style={{
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <Image
            style={{
              width: Dimensions.get("window").width + (edges.top - 25),
              height: Dimensions.get("window").height * 0.5,
              resizeMode: "cover",
              borderRadius: 10,
            }}
            source={{ uri: selectedProduct?.image }}
          ></Image>
        </View>

        <Text style={tw`mt-2 text-2xl font-semibold`}>
          {selectedProduct?.name}
        </Text>
        <View style={tw`mb-12`}>
          <Text style={tw`font-bold text-sm`}>Description</Text>
          <Text style={tw``}>{selectedProduct?.description}</Text>

          <Text style={tw`my-1`}>
            ❤Soft and Breathable: Mesh Fabric air mesh Upper makes you feel
            breathable and allow the foot to breathe, let you comfortable to
            stand for a long time. Open mesh on the upper and hole on the sole
            provides for superior lightweight and quick drying.
          </Text>
          <Text style={tw`my-1`}>
            ❤Lightweight Sneakers: Ultra lightweight, flexible and comfortable,
            air mesh material upper, super breathable. Anti-skid MD outsole,
            slip on. Perfect for walking and running, non-slip fit for all
            season.
          </Text>
          <Text style={tw`my-1`}>
            Warm Notices: Please check the SIZE DETAIL as below product
            description. Please kindly not wearing on rainy day, we do not
            suggest machine wash, hand wash only. (CM is foot length: UK 3=CN
            35=22.5cm, UK 3.5=CN 36=23cm, UK 4=CN 37=23.5cm, UK 5=CN 38=24cm, UK
            6=CN 39=24.5cm, UK 6.5=CN 39.5=24.8cm, UK 7=CN 40=25.2cm, UK 7.5=CN
            41=25.6cm, UK 8=CN 42=26cm)
          </Text>

          <Text style={tw`font-bold text-sm`}>Colors</Text>
          <Text style={tw`font-bold text-sm`}>Size</Text>
        </View>
      </ScrollView>
      <LinearGradient
        colors={["#c0392b", "#f1c40f", "#8e44ad"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={tw`bg-black absolute bottom-0 z-20 w-full flex flex-row justify-between mx-2 items-center px-4 rounded-md`}
      >
        <View style={tw`flex flex-row items-center `}>
          <Text style={tw` text-white font-bold text-2xl`}>Price:</Text>
          <Text style={tw`px-2 text-white`}>{selectedProduct?.price} Rwf</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Map Screen")}
          style={tw`px-4 py-2 bg-gray-200 m-2 rounded-xl`}
        >
          <Text style={tw` text-sm font-semibold`}>View Shop</Text>
          {/* <Icon /> */}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    position: "relative",
    marginBottom: 50,
  },
  overAll: {
    height: Dimensions.get("window").height,
    position: "relative",
    backgroundColor: "red",
    margin: 10,
  },
});
