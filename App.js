import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function App() {
  const {colorScheme, toggleColorScheme}=useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme}/>
      <Text className= "dark:text-white">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
