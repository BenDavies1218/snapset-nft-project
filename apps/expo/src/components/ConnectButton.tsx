import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";

export default function ConnectButton() {
  const [pressed, setPressed] = useState(false);

  return (
    <View className="flex w-full items-center justify-center p-4 shadow-md">
      <Pressable
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        className={`flex w-[80%] items-center justify-center rounded-3xl border-2 border-black bg-[##db1f1f] p-4 shadow-md ${pressed ? "mb-[2px] border-black" : "border-b-4 border-l-4"}`}
      >
        <Text className="text-[16px] font-bold text-white">Connect Wallet</Text>
      </Pressable>
    </View>
  );
}
