import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenWrapper } from './components/wrapper/screenWrapper';

export default function App() {
  return (
    <ScreenWrapper>
      <StatusBar style="auto" />
      <Text style={styles.text}>Custom Gradient Wrapper</Text>
      <View style={[styles.content, { backgroundColor: "red" }]} />
      <View style={[styles.content, { backgroundColor: "blue" }]} />
      <View style={[styles.content, { backgroundColor: "orange" }]} />
      <View style={[styles.content, { backgroundColor: "green" }]} />
      <View style={[styles.content, { backgroundColor: "purple" }]} />
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  text: { 
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

