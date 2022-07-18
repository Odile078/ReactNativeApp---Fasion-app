import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const TrialNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <View>
      <Text>TrialNavigator</Text>
    </View>
  );
};

export default TrialNavigator;

const styles = StyleSheet.create({});
