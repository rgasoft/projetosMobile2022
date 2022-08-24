import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container1}>
      <Text>Visao inicial</Text>
      <View style={styles.container2} >
        <text>primeiro</text>
        <View style={styles.container3}>
        <text>Segundo</text>
      
      <StatusBar style="auto" />
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
      backgroundColor: 'blue',
   margin :'1',
},
  container2: {
      backgroundColor: 'red',
   margin :'1',
},
  container3: {
      backgroundColor: 'green',
   margin :'5',
},
});


