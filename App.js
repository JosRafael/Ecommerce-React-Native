import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function App() {
  const {colorScheme, toggleColorScheme}=useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <View className="flex-row w-full gap-5">
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme}/>
      <Text className= "text-2xl font-bold dark:text-white">Nova coleção!</Text>
      </View>
      <StatusBar style={colorScheme === "dark" ? "light": "dark"}/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
