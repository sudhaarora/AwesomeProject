import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = "This is not really a bird nests";
  const onPressedTitle = () => {
    setTitleText("After pressed Bird's nest!!")
  }
  return (
    <>
    <View style={styles.container}>
      <Text>Hello Sudha Arora!</Text>
      <StatusBar style="auto" />
    </View>
    <View>
      <Text style={styles.baseText} onPress={onPressedTitle}>
        <Text style={styles.titleText}>{titleText}</Text>
      </Text>
    </View>
    <View style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}>
        <View style={{backgroundColor:'blue', flex:0.3}} />
        <View style={{backgroundColor:'red', flex:0.5}} />
        <Text>First React Native project</Text>
      </View>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
