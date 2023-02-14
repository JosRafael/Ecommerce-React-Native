import * as React from "react";
import { FlatList, Text } from "react-native";
import { products } from "../products";

export default function ProductsList() {
 
    return <FlatList data={products} keyExtractor={(product)=>product.id}
    renderItem={({item}) => <Text>{item.title}</Text> } 
    />
    
}
