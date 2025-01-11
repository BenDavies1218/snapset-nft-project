/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ImageSourcePropType } from "react-native";
import React, { useCallback } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

import {
  argent,
  coinbase,
  metamask,
  rainbow,
  walletconnect,
} from "../../assets";

// Define a single SupportedWallet component

function SupportedWallet({
  name,
  source,
  onPress,
}: {
  name: string;
  source: ImageSourcePropType;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.walletContainer}>
        <Image source={source} style={styles.walletImage} />
        <Text style={styles.walletText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function CustomBottomSheet({
  bottomSheetRef,
}: {
  bottomSheetRef: React.RefObject<BottomSheet>;
}) {
  const images = [
    { name: "Coinbase", source: coinbase },
    { name: "Metamask", source: metamask },
    { name: "Argent", source: argent },
    { name: "Rainbow", source: rainbow },
    {
      name: "WalletConnect",
      source: walletconnect,
    },
  ];

  const handleClick = async () => {
    const response = await fetch("http://localhost:3000/api/hello");
    const data = await response.json();
    console.log(data);
  };

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

  // Extract wallet names from file paths
  const wallets = images.map((path) => {
    const parts = path.name.split("/");
    const fileName = parts[parts.length - 1]?.split(".")[0] ?? "";
    const name = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    return { name, image: path };
  });

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      enableDynamicSizing={false}
      snapPoints={[1, "45%"]}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      handleComponent={() => (
        <View style={styles.handle}>
          <View className="mt-4 h-[6px] w-12 rounded-full bg-[#7c7d7f] bg-white"></View>
          <Text style={styles.handleText}>Connect a Wallet</Text>
        </View>
      )}
    >
      <BottomSheetView style={{ flex: 1, backgroundColor: "#282a2f" }}>
        <BottomSheetView style={styles.walletList}>
          {wallets.map((wallet) => (
            <SupportedWallet
              onPress={handleClick}
              key={wallet.name}
              name={wallet.name}
              source={wallet.image.source}
            />
          ))}
        </BottomSheetView>
        <BottomSheetView style={styles.infoContainer}>
          <Text style={styles.infoTitle}>What is a wallet?</Text>
          <Text style={styles.infoText}>
            A wallet is a place to store your digital assets. It allows you to
            interact with the blockchain and manage your assets. Wallets can be
            a browser extension, a mobile app, or a hardware device.
          </Text>
          <BottomSheetView style={styles.buttonContainer}>
            <Text style={styles.button}>Get a Wallet</Text>
            <Text style={styles.button}>Learn More</Text>
          </BottomSheetView>
        </BottomSheetView>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    color: "#2a97ea",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 10,
    borderColor: "#fff",
    borderWidth: 0.2,
    borderRadius: 20,
  },
  handle: {
    backgroundColor: "#282a2f",
    gap: 10,
    width: "100%",
    height: 40,
    paddingTop: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  handleText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  walletList: {
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#282a2f",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  walletContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  walletImage: {
    width: 40,
    height: 40,
    marginBottom: 5,
    borderRadius: 10,
  },
  walletText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoContainer: {
    backgroundColor: "#1f2024",
    padding: 10,
    gap: 10,
  },
  infoTitle: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  infoText: {
    color: "#9c9c9c",
    fontSize: 14,
    textAlign: "center",
  },
});
