import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductsList from "../ProductsList";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import tw from "twrnc";
const CategoryDesigns = ({ route, navigation }) => {
  const { womenShoes, menShoes, shirts, dresses, activeCategoryType } =
    useSelector(({ Product }) => Product);
  const [products, setProducts] = useState(womenShoes);
  var activeIndex = navigation?.getState().index;
  const edges = useSafeAreaInsets();
  useEffect(() => {}, []);
  useEffect(() => {
    if (activeIndex && route?.name) {
      if (activeIndex === 0 && route?.name === "Women shoes") {
        setProducts(womenShoes);
      } else if (activeIndex === 1 && route?.name === "Men shoes") {
        setProducts(menShoes);
      } else if (activeIndex === 2 && route?.name === "Dresses") {
        setProducts(dresses);
      } else if (activeIndex === 3 && route?.name === "Shirt") {
        setProducts(shirts);
      }
    }
  }, [activeIndex, route?.name]);
  return (
    <View style={tw`px-4 `}>
      <ProductsList products={products} />
    </View>
  );
};

export default CategoryDesigns;

const styles = StyleSheet.create({});
