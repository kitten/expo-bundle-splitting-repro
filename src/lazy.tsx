import React from "react";
import { Text, View } from "react-native";
import Child from "./child";

const Sync = React.lazy(async () => {
  try {
    return await import("./sync");
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export default function Lazy() {
  return (
    <View>
      <Text>Lazy Route</Text>
      <Child />
      <Sync />
    </View>
  );
}
