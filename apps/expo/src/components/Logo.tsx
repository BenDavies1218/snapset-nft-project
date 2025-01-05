import { Text, View } from "react-native";

/**
 * This is actually the craziest thing i've done. but looks ok.
 *
 * @returns Logo component
 */
export default function Logo({
  size = "medium",
}: {
  size?: "small" | "medium" | "large";
}) {
  const sizeStyles = {
    small: {
      textSize: "text-3xl",
      containerSize: "w-[50px] h-[50px]",
      topOffset: "top-[-2px]",
    },
    medium: {
      textSize: "text-5xl",
      containerSize: "w-[70px] h-[70px]",
      topOffset: "top-[9px]",
    },
    large: {
      textSize: "text-7xl",
      containerSize: "w-[100px] h-[100px]",
      topOffset: "top-[16px]",
    },
  };

  // Use the selected size's styles
  const { textSize, containerSize, topOffset } = sizeStyles[size];

  return (
    <View
      className={`relative flex ${containerSize} items-center justify-center rounded-full border-2 border-black bg-[#db1f1f]`}
    >
      <Text
        className={`absolute ${topOffset} z-[5] scale-y-[1.5] pt-2 text-center ${textSize} font-extrabold text-[#eeeade]`}
      >
        S
      </Text>
      <Text
        className={`absolute ${topOffset} z-[4] scale-[1.1] scale-y-[1.5] pt-2 text-center ${textSize} font-extrabold text-black`}
      >
        S
      </Text>
      <Text
        className={`absolute ${topOffset} z-[2] scale-y-[1.5] pt-2 text-center ${textSize} font-extrabold text-black`}
      >
        S
      </Text>
      <Text
        className={`absolute ${topOffset} z-[3] scale-y-[1.5] pt-2 text-center ${textSize} font-extrabold text-[#db1f1f]`}
      >
        S
      </Text>
    </View>
  );
}
