import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
const ScrollableScreens = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        scrollIndicatorInsets={{ top: 10, bottom: 10, left: 10, right: 10 }}
        scrollEventThrottle={10}
      >
        <View style={styles.container}>
          <Text>Login</Text>
          <TouchableHighlight
            style={tw`rounded-md bg-blue-300 px-4 py-2 my-4`}
            onPress={() =>
              navigation.replace("App screens", { screen: "Wallet" })
            }
          >
            <Text style={tw`text-white text-xl font-bold`}>Get Started</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <Text>Login out</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScrollableScreens;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
