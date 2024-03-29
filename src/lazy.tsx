import React from "react";
import { Text, View } from "react-native";

const Sync = React.lazy(() => import("./sync"));

export default function Lazy() {
  return (
    <View>
      <Text>Lazy Route</Text>
      <Sync />
    </View>
  );
}
