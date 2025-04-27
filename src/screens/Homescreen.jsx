import { StyleSheet, Text, View } from 'react-native'
 

const Homescreen = () => {
  return (
    <View style={styles.container }>
      <Text>Homescreen</Text>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"#ffffff"
  }

})