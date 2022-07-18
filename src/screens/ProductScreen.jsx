import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import ShoppingImage from "../../assets/shopping-img4.png";
import { LinearGradient } from "expo-linear-gradient";
import NavOptions from "../components/NavOptions";
import ProductsList from "../components/ProductsList";
import { setSelectedProduct } from "../../store/slices/productsSlice";
import { useNavigation } from "@react-navigation/native";
import ProductCategoryNavigation from "../../navigations/ProductCategoryNavigation";

const ProductScreen = () => {
  const { womenShoes } = useSelector(({ Product }) => Product);
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
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const edges = useSafeAreaInsets();
  return (
    <SafeAreaView style={tw`p-4  `}>
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
              style={tw`text-white text-2xl font-bold mx-2 mt-4 text-center`}
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

      <View style={tw`py-4`}>
        <NavOptions categories={data} />
      </View>
      {/* <View style={tw`py-2 bg-green-100`}>
        <ProductCategoryNavigation />
      </View> */}

      <View
        style={{
          marginBottom: Dimensions.get("window").height + (edges.bottom + 10),
        }}
      >
        <ProductsList products={womenShoes} />
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
