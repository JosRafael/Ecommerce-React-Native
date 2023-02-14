import * as React from "react";
import {
  View,
  Text,
  TouchatableOpacity,
  Image,
  useState,
  useColorScheme,
} from "react-native";
import { ColorScheme } from "nativewind";
import { AntDesign } from "@expo/vector-icons";

export default function ProductCard({
  image,
  category,
  title,
  price,
  description,
}) {
  const [count, setCount] = React.useState(1);
  const { ColorScheme } = useColorScheme;
  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
        <View>
            <Image source={{uri: image}} className="w-full h-72" style={{resizeMode: "contain"}}/>
        </View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
}
