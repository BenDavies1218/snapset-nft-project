import React from "react";
import { Pressable } from "react-native";
import Svg, { Path } from "react-native-svg"; // Import Svg and Path
import { useNavigation } from "expo-router";

export default function CustomBackButton() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Svg viewBox="0 0 320 512" width={16} height={16}>
        <Path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          fill="black" // You can customize the color here
        />
      </Svg>
    </Pressable>
  );
}
