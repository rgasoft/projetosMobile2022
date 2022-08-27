import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button,Text, View , Alert, SafeAreaView } from 'react-native';
import Constants from 'expo-Constants';
 
 function Separator ()
{ 
  return <View style={styles.Separator} />
}

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
<View>
  <Button title="Aperte Aqui" onPress={() => {alert('Simples')}} />
</View>[
<Separator />
</View>
<Text style={style.title}>
  Adjust the color in a way that looks standard on each platform. ON iOS, the color prop controls the color adjusts the text.
   On Android , the color adjusts the background color of the button.
  </Text>
<Button title="Aperte aqui" color="#f194ff" onPress={() => { Alert('buton with adjusted color pressed')}} />
<View>
  <Separator/>
</View>
<Text style={styles.title >
All Interaction  for the componets are desable.
</Text>
<Button title="Aperte aqui" disable onPress={() => {alert('Cannot press this one ')}} />
</View>
<separator/>
</View>
<Text style={styles.title}>
  <Button
  title="Botão esquerdo"
  onPress={() => {alert('Left button pressed')}}
  />
  <Button
  title="Botão direito"
  onPress={() => {alert('Right button pressed')}}
 />
</View>
</View>
<Separator />
<Separator />
<Separator />
</SafeAreaView>
  );
 }
 const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
title: {
  textAling: 'center',
  marginVertical: 8,
  }, 
fixToText: {
  FileSystemDirection: ' row',
  JustifyContent: 'space-between'
},
separator: {
  marginVertical: 8,
  borderBottomColor: '#737373 ',
  BorderBottomWidth: StyleSheet.hairlineWIdth,
}, 
});

  
  