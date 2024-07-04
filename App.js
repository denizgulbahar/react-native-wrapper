import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenWrapper } from './components/wrapper/screenWrapper';

export default function App() {
  return (
    <ScreenWrapper>
      <StatusBar style="auto" />
      <Text style={styles.text}>Custom Gradient Wrapper</Text>
      <View style={[styles.content, { backgroundColor: "#FFF3B5" }]} />
      <View style={[styles.content, { backgroundColor: "#FFDD7E" }]} />
      <View style={[styles.content, { backgroundColor: "#FFC145" }]} />
      <View style={[styles.content, { backgroundColor: "#FFA300" }]} />
      <View style={[styles.content, { backgroundColor: "#D18000" }]} />
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  text: { 
    padding: 10,
    fontSize: 30,
    fontWeight: "bold", 
    textAlign: "center",
    color: "#000",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  content: {
    height: 300,
    borderRadius: 10,
    margin: 10,
    borderWidth: 2
  }
})

