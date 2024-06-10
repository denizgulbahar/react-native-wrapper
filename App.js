import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { ScreenWrapper } from './components/wrapper/screenWrapper';

export default function App() {
  return (
    <ScreenWrapper>
      <StatusBar style="auto" />
      <Text style={styles.text}>Custom Gradient Wrapper</Text>
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  text: { 
    fontSize: 30,
    fontWeight: "bold", 
    textAlign: "center",
    color: '#333',
    margin: 10,
  }
})

