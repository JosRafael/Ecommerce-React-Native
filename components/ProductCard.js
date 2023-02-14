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
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
}
