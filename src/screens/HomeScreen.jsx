import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useSelector } from "react-redux";

import Svg, { Circle, SvgXml, SvgUri } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import ShoppingImage from "../../assets/shopping-img.png";
import ProductsList from "../components/ProductsList";
import PreviewList from "../components/PreviewList";
const HomeScreen = () => {
  const { womenShoes } = useSelector(({ Product }) => Product);
  const xml = `
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M32.6548 18.7302C32.9612 18.3363 33.11 17.8285 32.9743 17.3106L28.9519 2.0643C28.7185 1.18307 27.8124 0.654957 26.9327 0.888372L1.2299 7.66531C0.353053 7.8973 -0.176543 8.80627 0.0539632 9.68602L4.07639 24.9309C4.3069 25.8106 5.21729 26.3388 6.09711 26.1083L15.1792 23.7127V28.8176C15.1792 31.6728 19.9107 33.1669 24.5882 33.1669C29.2628 33.1669 34.0001 31.6728 34.0001 28.8177V21.0763C34 20.1469 33.4908 19.3648 32.6548 18.7302ZM29.7442 13.475L30.1643 15.0623L25.055 16.4119L24.6377 14.8216L29.7442 13.475ZM26.7795 3.43138L27.5775 6.4544L19.5955 8.56115L18.7974 5.53813L26.7795 3.43138ZM23.1977 15.2009L23.6062 16.7533C21.7169 16.8379 19.8786 17.1676 18.4021 17.7307L18.0899 16.5519L23.1977 15.2009ZM5.40985 21.5912L4.9926 20.0068L10.1005 18.6557L10.5206 20.2489L5.40985 21.5912ZM11.5405 18.2779L16.6455 16.9284L17.0321 18.383C16.908 18.4589 16.7914 18.5376 16.6775 18.6179L11.9578 19.8638L11.5405 18.2779ZM32.296 28.6921C32.296 30.3568 28.847 31.7049 24.5882 31.7049C20.3338 31.7049 16.8819 30.3553 16.8819 28.6921V26.8173C16.8819 26.7546 16.9183 26.6977 16.9285 26.6379C17.1722 28.2165 20.4899 29.4683 24.5882 29.4683C28.6879 29.4683 32.0071 28.2165 32.2493 26.6379C32.2595 26.6977 32.296 26.7546 32.296 26.8173V28.6921ZM32.296 25.0038C32.296 26.667 28.847 28.0151 24.5882 28.0151C20.3338 28.0151 16.8819 26.667 16.8819 25.0038V23.129C16.8819 23.0678 16.9183 23.0094 16.9285 22.9496C17.1722 24.5267 20.4899 25.7815 24.5882 25.7815C28.6879 25.7815 32.0071 24.5267 32.2493 22.9496C32.2595 23.0094 32.296 23.0678 32.296 23.129V25.0038ZM24.5881 24.0861C20.3338 24.0861 16.8818 22.738 16.8818 21.0762C16.8818 19.4144 20.3337 18.0664 24.5881 18.0664C28.8469 18.0664 32.2959 19.4144 32.2959 21.0762C32.296 22.738 28.8469 24.0861 24.5881 24.0861Z" fill="white"/>
  </svg>
  `;
  return (
    <SafeAreaView style={tw`bg-white h-full relative `}>
      <ScrollView horizontal={false} style={tw`mb-4  `}>
        <View>
          {/* <Text style={tw`p-4 android:pt-2 text-red-300 flex-row font-bold `}>
            Millenium Wear
          </Text> */}
          {/* <View>
          <SvgXml xml={xml} width="100%" height="100%" />
        </View> */}

          <View>
            <View
              style={tw` h-60 relative mx-4 mb-2 rounded-xl overflow-hidden`}
            >
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
                  style={tw`text-white text-2xl font-bold mx-2 text-center`}
                >
                  All you need , all you want here
                </Text>
              </ImageBackground>
              <LinearGradient
                // colors={["red", "yellow"]}
                // start={{
                //   x: 0,
                //   y: 0,
                // }}
                // end={{
                //   x: 1,
                //   y: 1,
                // }}
                colors={["#c0392b", "#f1c40f", "#8e44ad"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 1 }}
                style={tw`w-full h-60 absolute top-0 z-0 rounded-xl overflow-hidden`}
              />
            </View>

            {/* <LinearGradient
            colors={["#c0392b", "#f1c40f", "#8e44ad"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={tw` py-4 px-2 mt-10 rounded-md relative h-60`}
          >
            <Text
              style={tw`text-white text-2xl font-bold mx-2 text-center z-1`}
            >
              All you need , all you want here at Millenium Wear
            </Text>
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
                zIndex: 2,
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
              source={ShoppingImage}
            />
          </LinearGradient> */}
          </View>
          <View style={tw`mx-4`}>
            <GooglePlacesAutocomplete
              placeholder="Search places"
              styles={{
                container: {
                  flex: 0,
                },
                textInput: {
                  fontSize: 13,
                },
              }}
              fetchDetails={true}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log("THE DATA ------:", data, details);
              }}
              enablePoweredByContainer={false}
              minLength={2}
              query={{
                key: GOOGLE_MAPS_API_KEY,
                language: "en",
              }}
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
            />
          </View>

          <View style={tw`mx-4`}>
            <NavOptions />
          </View>

          <View style={tw`mx-4`}>
            <Text style={tw` text-base font-bold text-gray-800`}>Newest</Text>
            <PreviewList products={womenShoes.slice(0, 4)} />
          </View>
          <View style={tw`mx-4 mb-10`}>
            <Text style={tw` text-base font-bold text-gray-800`}>Popular</Text>
            <PreviewList products={womenShoes.slice(5, 10)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A6A9BC",
    // paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
