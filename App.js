import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ScreenWrapper } from './components/wrapper/screenWrapper';
export default function App() {

  const array = [
    "header", "footer", "content", "sidebar", "menu", "navigation", 
    "login", "signup", "profile", "settings"
  ];
  const renderItem = ({item}) => (
    <View style={styles.renderItem}>
      <Text style={{ textAlign: "center" }}>
        {item}
      </Text>
    </View>
  )
  const gradientColors= ['#FFA500', '#FF4500', '#00BFFF']
  const gradientDirection = {
    start: { x: 1, y: 0 }, // Sağ üst köşe
    end: { x: 0, y: 1 } // Sol alt köşe
  };
  // const gradientColors= ['#4B9F6F', '#F1D02B', '#A8D5BA']
  // const gradientDirection = {
  //   start: { x: 0, y: 0 }, // Başlangıç noktası (merkez)
  //   end: { x: 1, y: 0}        // Bitiş noktası (sağ alt köşe)
  // };
  
  return (
    <>
      <StatusBar style="auto" />
      <ScreenWrapper 
        gradientDirection={gradientDirection} 
        gradientColors={gradientColors}
      >
        <Text style={styles.text}>Custom Gradient Wrapper</Text>
         {/* First Row */}
         <View style={styles.row}>
          <View style={[styles.content, { backgroundColor: "#FFF3B5" }]} />
          <View style={[styles.content, { backgroundColor: "#FFC145" }]} />
        </View>

        {/* Second Item */}
        <View style={[styles.content, { backgroundColor: "#FFC145" }]} />

        {/* Second Row */}
        <View style={styles.row}>
          <View style={[styles.content, { flex: 2, backgroundColor: "#FF4500" }]} />
          <View style={[styles.content, { flex: 3, backgroundColor: "#FFDD7E" }]} />
        </View>

        {/* Third Item */}
        <View style={[styles.content, { height: 150, backgroundColor: "#00BFFF" }]} />

        <FlatList
          scrollEnabled={false}
          data={array}
          style={{ flex: 1 }}
          contentContainerStyle={styles.flatlistContentContainer}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          renderItem={renderItem}
        />
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
  },
  renderItem: {
    height: 60, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  flatlistContentContainer: {
    padding: 10, 
    borderRadius: 20, 
    margin: 30,
    backgroundColor: "#FFC145", 
    width: "80%", 
    justifyContent:"center", 
    alignSelf:"center"
  }
})

