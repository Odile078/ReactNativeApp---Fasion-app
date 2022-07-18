import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import tw from "twrnc";
import Map from "../components/Map";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";

const MapScreen = () => {
  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  const mapRef = useRef(null);
  useEffect(() => {
    if (!origin || !destination) return;
    //Zooming to fit markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [destination, origin]);
  return (
    <SafeAreaView>
      <View style={tw`bg-indigo-50 p-2`}>
        <Text style={tw`m-2 text-sm text-gray-700`}>Your Location</Text>
      </View>

      <View style={tw`h-full`}>
        <MapView
          ref={mapRef}
          style={tw`flex-1`}
          initialRegion={{
            latitude: 37.3318456,
            longitude: -122.0296002,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          {/* <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={2}
            strokeColor="black"
          /> */}
          <Marker
            coordinate={{ latitude: 37.3318456, longitude: -122.0296002 }}
            title="origin"
            descreiption="our location"
            identifier="origin"
          />
          <Marker
            coordinate={{ latitude: 37.771707, longitude: -122.4053769 }}
            title="destination"
            descreiption="our destination location"
            identifier="destination"
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
