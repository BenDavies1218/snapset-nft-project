import { Text, View } from "react-native";
import { Stack } from "expo-router";

import CustomBackButton from "~/components/CustomBackButton";

export default function ToGetStarted() {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => <Text>How to get started</Text>,
          headerBackTitle: "home",
          headerLeft: () => <CustomBackButton />,
          contentStyle: {
            backgroundColor: "#eeeade",
          },
        }}
      />
      <View className="w-full p-4">
        <Text className="py-4 text-foreground">page content</Text>
      </View>
    </View>
  );
}
