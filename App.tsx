import "@expo/metro-runtime";

import React, { Suspense } from "react";

import { StyleSheet, View } from "react-native";

const NullFallback = () => {
  return <p>Loading</p>;
};

const LazyText = React.lazy(() => import("./src/lazy"));

export default function App() {
  return (
    <View style={styles.container}>
      <Suspense fallback={<NullFallback />}>
        <LazyText />
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
