import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";

import ConnectButton from "~/components/ConnectButton";
import Logo from "../components/Logo";
import MainText from "../components/MainText";

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
      <View className="mb-40 mt-8 flex w-[90%] items-start justify-start gap-8 pl-12">
        <Logo size="medium" />
        <MainText />
      </View>
      <Text className="mb-20 mt-12 w-[90%] pl-12 text-left">
        Snap your favourite moments in time and won them forever as NFTs on the
        blockchain
      </Text>

      <ConnectButton />

      <Link
        href={{
          pathname: "/toGetStarted/page",
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
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});
