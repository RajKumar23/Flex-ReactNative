import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Text 1</Text>
      <Text style={styles.text2}>Text 2</Text>
      <Text style={styles.text3}>Text 3</Text>
      <Text style={styles.text4}>Text 4</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    paddingTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text1: {
    flex: 2,
    padding: 10,
    backgroundColor: "red",
  },
  text2: {
    flex: 1,
    padding: 20,
    backgroundColor: "orange"
  },
  text3: {
    flex: 1,
    padding: 30,
    backgroundColor: "pink"
  },
  text4: {
    flex: 1,
    padding: 40,
    backgroundColor: "yellow"
  },
});
