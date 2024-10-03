import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenWrapper } from './components/wrapper/screenWrapper';
export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <ScreenWrapper>
        <Text style={styles.text}>Custom Gradient Wrapper</Text>
         {/* First Row */}
         <View style={styles.row}>
          <View style={[styles.content, { backgroundColor: "#FFF3B5" }]} />
          <View style={[styles.content, { backgroundColor: "#FFC145" }]} />
        </View>

        {/* Second Item */}
        <View style={[styles.content, { backgroundColor: "#FFDD7E" }]} />

        {/* Second Row */}
        <View style={styles.row}>
          <View style={[styles.content, { flex: 2, backgroundColor: "#FFA300" }]} />
          <View style={[styles.content, { flex: 3, backgroundColor: "#FFDD7E" }]} />
        </View>

        {/* Third Item */}
        <View style={[styles.content, { height: 150, backgroundColor: "#FFA300" }]} />
      </ScreenWrapper>
    </>
  );
}
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
  },
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
    flex: 1,
    height: 300,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#FFA300",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, shadowRadius: 5
  }
})

