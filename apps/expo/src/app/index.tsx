import "node-libs-expo/globals";
import "react-native-url-polyfill/auto";
import "react-native-get-random-values";

import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

import ConnectButton from "~/components/ConnectButton";
import Logo from "../components/Logo";
import MainText from "../components/MainText";

export default function Index() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const renderBackdrop = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={"close"}
        enableTouchThrough={false}
      />
    ),
    [],
  );

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
        <View className="mb-40 mt-8 flex w-[90%] items-start justify-start gap-8 pl-12">
          <Logo size="medium" />
          <MainText />
        </View>
        <Text className="mb-20 mt-12 w-[90%] pl-12 text-left">
          Snap your favourite moments in time and won them forever as NFTs on
          the blockchain
        </Text>

        <ConnectButton handlePresentModalPress={handlePresentModalPress} />

        <Link
          href={{
            pathname: "/toGetStarted/page",
          }}
          style={styles.link}
        >
          <Text style={styles.text}>Need some help getting started?</Text>
        </Link>
      </SafeAreaView>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        enableDynamicSizing={false}
        snapPoints={[1, "50%"]}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        handleComponent={() => {
          return (
            <View
              style={{
                backgroundColor: "#282a2f",
                width: "100%",
                height: 40,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Connect a Wallet
              </Text>
            </View>
          );
        }}
      >
        <BottomSheetView style={{ flex: 1, backgroundColor: "#282a2f" }}>
          <BottomSheetView>
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 10,
                padding: 10,
              }}
            >
              Supported Wallets
            </Text>
          </BottomSheetView>
          <BottomSheetView
            style={{
              backgroundColor: "#1f2024",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                textAlign: "center",
                marginTop: 10,
                fontWeight: "bold",
              }}
            >
              What is a wallet?
            </Text>
            <Text
              style={{ color: "#9c9c9c", fontSize: 14, textAlign: "center" }}
            >
              A wallet is a place to store your digital assets. It allows you to
              interact with the blockchain and manage your assets. Wallets can
              be a browser extension, a mobile app, or a hardware device.
            </Text>
          </BottomSheetView>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
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
