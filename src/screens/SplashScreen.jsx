import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import splashLogo from "../../assets/splash-logo.jpg";
import HomeScreen from "./HomeScreen";
import Home from "../components/splash/Home";
const SplashScreen = () => {
  const navigation = useNavigation();
  const edges = useSafeAreaInsets();

  // setTimeout(() => {
  //   navigation.navigate("Home screen");
  // }, 5000);
  // Animation Values....
  const startAnimation = useRef(new Animated.Value(0)).current;

  // Scaling Down Both logo and Title...
  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;

  // Offset Animation....
  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  // Animating COntent...
  const contentTransition = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;
  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(startAnimation, {
          // toValue: -Dimensions.get("window").height + 100,
          toValue: -Dimensions.get("window").height + (edges.top + 65),
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          // toValue: -Dimensions.get("window").height + 100,
          toValue: 0.35,
          useNativeDriver: true,
        }),
        Animated.timing(scaleTitle, {
          // toValue: -Dimensions.get("window").height + 100,
          toValue: 0.8,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          // Moving to Right Most...
          toValue: {
            x: Dimensions.get("window").width / 2 - 35,
            y: Dimensions.get("window").height / 2 - 25,
          },
          useNativeDriver: true,
        }),
        Animated.timing(moveTitle, {
          //Moving to Right Most...
          toValue: {
            x: 0,
            //Since image size is 100...
            y: Dimensions.get("window").height / 2 - 90,
          },
          useNativeDriver: true,
        }),
        Animated.timing(contentTransition, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }, 500);
  }, []);
  return (
    <SafeAreaView
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "black",
      }}
    >
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "black",
          zIndex: 1,
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            transform: [{ translateY: startAnimation }],
          }}
        >
          <Animated.Image
            source={splashLogo}
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              paddingBottom: 20,
              transform: [
                // { scale: scaleLogo }
                { translateX: moveLogo.x },
                { translateY: moveLogo.y },
                { scale: scaleLogo },
              ],
            }}
          />
          <Animated.Text
            style={{
              fontSize: 25,
              color: "white",
              transform: [
                // { scale: scaleTitle }
                { translateY: moveTitle.y },
                { scale: scaleTitle },
              ],
            }}
          >
            ftz Wear
          </Animated.Text>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.04)",
            zIndex: 0,
            transform: [{ translateY: contentTransition }],
          }}
        >
          <Home />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({});

/*
 const navigation = useNavigation();
  const edges = useSafeAreaInsets();

  // setTimeout(() => {
  //   navigation.navigate("Home screen");
  // }, 5000);
  // Animation Values....
  const startAnimation = useRef(new Animated.Value(0)).current;

  // Scaling Down Both logo and Title...
  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;

  // Offset Animation....
  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  // Animating COntent...
  const contentTransition = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;
  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(startAnimation, {
          // toValue: -Dimensions.get("window").height + 100,
          toValue: -Dimensions.get("window").height + (edges.top + 65),
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          // toValue: -Dimensions.get("window").height + 100,
          toValue: 0.35,
          useNativeDriver: true,
        }),
        Animated.timing(scaleTitle, {
          // toValue: -Dimensions.get("window").height + 100,
          toValue: 0.8,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          // Moving to Right Most...
          toValue: {
            x: Dimensions.get("window").width / 2 - 35,
            y: Dimensions.get("window").height / 2 - 5,
          },
          useNativeDriver: true,
        }),
        Animated.timing(moveTitle, {
          //Moving to Right Most...
          toValue: {
            x: 0,
            //Since image size is 100...
            y: Dimensions.get("window").height / 2 - 90,
          },
          useNativeDriver: true,
        }),
        // Animated.timing(contentTransition, {
        //   toValue: 0,
        //   useNativeDriver: true,
        // }),
      ]).start();
    }, 500);
  }, []);
  return (
<SafeAreaView
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "white",
      }}
    >
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "black",
          zIndex: 1,
          transform: [{ translateY: startAnimation }],
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <Animated.Image
            source={splashLogo}
            style={{
              width: 100,
              height: 100,
              resizeMode: "cover",
              paddingBottom: 20,
              transform: [
                // { scale: scaleLogo }
                { translateX: moveLogo.x },
                { translateY: moveLogo.y },
                { scale: scaleLogo },
              ],
            }}
          />
          <Animated.Text
            style={{
              fontSize: 25,
              color: "white",
              transform: [
                // { scale: scaleTitle }
                { translateY: moveTitle.y },
                { scale: scaleTitle },
              ],
            }}
          >
            ftz
          </Animated.Text>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,0.04)",
          zIndex: 0,
          transform: [{ translateY: contentTransition }],
        }}
      >
        <Home />
      </Animated.View>
    </SafeAreaView>);
*/
