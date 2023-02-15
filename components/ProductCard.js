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
        <View className="bg-white rounded-xl">
            <Image source={{uri: image}} className="w-full h-72" style={{resizeMode: "contain"}}/>
        </View>
       <View className="mt-5">
       <Text className="text-sm text-black/60 dark:text-white/70">{category}</Text>
      <Text className="text-lg font-semibold dark:text-white">{title}</Text>
      <View>
        <AntDesign
        name="minuscircleo"
        size={24}
        color={ColorScheme === "dark" ? "light" : "dark"}
        onPress= {()=> setCount(count-1)}
        />
           <AntDesign
        name="pluscircleo"
        size={24}
        color={ColorScheme === "dark" ? "light" : "dark"}
        onPress= {()=> setCount(count+1)}
        />
      </View>
      <Text>{description}</Text>
      <Text>{price}</Text>
       </View>
       
    </View>
  );
}
