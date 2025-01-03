import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    <SafeAreaView className="bg-background">
      <View className="w-full p-4">
        <Text className="py-4 text-foreground">home page</Text>
      </View>
      <Link
        href={{
          pathname: "/",
        }}
      >
        Home
      </Link>
    </SafeAreaView>
  );
}
