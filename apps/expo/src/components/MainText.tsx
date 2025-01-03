import { Text, View } from "react-native";

export default function MainText() {
  return (
    <View className="relative flex gap-[150px]">
      <View>
        <Text className="absolute top-[0px] z-[5] scale-y-[1.5] text-[110px] font-bold text-black">
          SNAP
        </Text>
        <Text className="absolute top-[8px] z-[4] scale-y-[1.5] text-[110px] font-bold text-[#eeeade]">
          SNAP
        </Text>
        <Text className="absolute top-[10px] z-[3] scale-y-[1.5] text-[110px] font-bold text-black">
          SNAP
        </Text>
        <Text className="absolute top-[14px] z-[2] scale-y-[1.5] text-[110px] font-bold text-[#eeeade]">
          SNAP
        </Text>
        <Text className="absolute top-[16px] z-[1] scale-y-[1.5] text-[110px] font-bold text-black">
          SNAP
        </Text>
      </View>
      <View>
        <Text className="absolute top-[0px] z-[5] scale-y-[1.5] text-[110px] font-bold text-black">
          SET
        </Text>
        <Text className="absolute top-[8px] z-[4] scale-y-[1.5] text-[110px] font-bold text-[#eeeade]">
          SET
        </Text>
        <Text className="absolute top-[10px] z-[3] scale-y-[1.5] text-[111px] font-bold text-black">
          SET
        </Text>
        <Text className="absolute top-[14px] z-[2] scale-y-[1.5] text-[110px] font-bold text-[#eeeade]">
          SET
        </Text>
        <Text className="absolute top-[16px] z-[1] scale-y-[1.5] text-[111px] font-bold text-black">
          SET
        </Text>
      </View>
    </View>
  );
}
