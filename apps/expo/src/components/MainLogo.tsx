import React from "react";
import { Text, View } from "react-native";

import Logo from "./Logo";
import MainText from "./MainText";

export default function MainLogo() {
  return (
    <>
      <View className="mb-40 mt-8 flex w-[90%] items-start justify-start gap-8 pl-12">
        <Logo size="medium" />
        <MainText />
      </View>
      <Text className="mb-20 mt-12 w-[90%] pl-12 text-left">
        Snap your favourite moments in time and won them forever as NFTs on the
        blockchain
      </Text>
    </>
  );
}
