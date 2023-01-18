import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Logo from "../assets/logo.svg";

import colors from "tailwindcss/colors";

export const Header = () => {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />

      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={0.7}
        className="flex-row px-4 h-11 border border-violet-500 rounded-lg items-center"
      >
        <Feather name="plus" color={colors.violet[500]} size={24} />
        <Text className="text-white ml-3 font-semibold text-base">Novo</Text>
      </TouchableOpacity>
    </View>
  );
};
