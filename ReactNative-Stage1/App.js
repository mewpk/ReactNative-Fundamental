import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View  } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.boxRed}>
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
  boxRed :{
    width : "200px",
    height : "200px",
    backgroundColor : "red"
  }
});
