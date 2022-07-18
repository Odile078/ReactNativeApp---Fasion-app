import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import tw from "twrnc";
// Post's....
import splashLogo from "../../../assets/splash-logo.jpg";
import Post1 from "../../../assets/post1.jpg";
import Post2 from "../../../assets/post2.jpg";
import Post3 from "../../../assets/post3.jpg";
import Post4 from "../../../assets/post4.jpg";
import Post5 from "../../../assets/post5.jpg";
import Post6 from "../../../assets/post6.jpg";
import Post7 from "../../../assets/post7.jpg";
import Post8 from "../../../assets/post8.jpg";
import splashBack from "../../../assets/back1.jpg";
import splashBack2 from "../../../assets/back2.jpg";
import splashBack3 from "../../../assets/back3.jpg";
import splashBack4 from "../../../assets/back4.jpg";
import splashBack5 from "../../../assets/back5.jpg";
import splashBack6 from "../../../assets/back6.jpg";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const edges = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    // <View>
    <ImageBackground
      source={splashBack4}
      style={{
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        flex: 1,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={tw`flex flex-row rounded-md `}>
          <View>
            <Text style={tw` mx-10 text-white text-4xl font-bold`}>
              It's rare but reachable, you can have it
            </Text>
          </View>
        </View>
        <View style={tw`absolute bottom-20 flex justify-center`}>
          <TouchableOpacity
            style={tw`bg-black rounded-md border-2 py-2 px-3`}
            onPress={() => {
              // navigation.replace("Home");
              navigation.replace("InsideHome", { screen: "HomeScreen" });
            }}
          >
            <Text style={tw`text-lg text-white`}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
