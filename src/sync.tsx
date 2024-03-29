import React from "react";
import { Text, View } from "react-native";

import Lazy from "./lazy";

export default function Sync() {
  return (
    <View>
      <Text>Sync Component</Text>
      <Lazy />
    </View>
  );
}
