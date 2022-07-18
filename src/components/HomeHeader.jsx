import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const HomeHeader = () => {
  return (
    <View>
      <Text style={tw`p-4 android:pt-2 text-red-300 flex-row font-bold `}>
        Millenium Wear
      </Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
