import React from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";

import ConnectButton from "~/components/ConnectButton";
import { api } from "~/utils/api";
import Logo from "../components/Logo";

export default function Index() {
  return (
    <SafeAreaView className="h-full flex-1 items-center justify-center bg-[#eeeade]">
      <Stack.Screen
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#eeeade",
          },
        }}
      />
      <Logo />
      <ConnectButton />
      <Link
        href={{
          pathname: "/home/page",
        }}
        style={styles.link}
      >
        <Text style={styles.text}>Need some help getting started?</Text>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  link: {
    // You can apply some styles to Link component itself
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
  },
});
