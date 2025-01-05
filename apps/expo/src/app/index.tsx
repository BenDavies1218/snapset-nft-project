import "node-libs-expo/globals";
import "react-native-url-polyfill/auto";
import "react-native-get-random-values";

import type BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import ConnectButton from "~/components/ConnectButton";
import CustomBottomSheet from "~/components/CustomBottomSheet";
import HelpLink from "~/components/HelpLink";
import MainLogo from "~/components/MainLogo";

export default function Index() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="h-full flex-1 items-center justify-center bg-[#eeeade]">
        <Stack.Screen
          options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#eeeade",
            },
          }}
        />
        <MainLogo />
        <ConnectButton handlePresentModalPress={handlePresentModalPress} />
        <HelpLink />
      </SafeAreaView>

      <CustomBottomSheet bottomSheetRef={bottomSheetRef} />
    </GestureHandlerRootView>
  );
}
