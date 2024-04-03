import React from "react";
import { Text, View } from "react-native";

import Child from "./child";
import Lazy from "./lazy";

export default function Sync() {
  console.log(Lazy);
  return (
    <View>
      <Text>Sync Component</Text>
      <Child />
    </View>
  );
}
